import { html } from 'https://raw.githubusercontent.com/denomod/deno_html/v1.2.0/mod.ts';
import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';

import { layout } from './vendor/views/layout.ts';
import TensList from './vendor/shared/interfaces/tens-list.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler() {
  const data = await arc.tables();

  const lists = await data.lists.query({
    IndexName: 'byFormState',
    KeyConditionExpression: 'formState = :state',
    ExpressionAttributeValues: {
      ':state': 'completed',
    },
  });

  const listItems = (cleanUp(lists.Items) as unknown) as TensList[];

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
    },
    body: base(listItems),
  };
}

export function base(lists: TensList[]) {
  const stringed = generateLists(lists);
  const content = html`
    <div class="header">Browse Other Lists!</div>
    <div class="description">below is a list of lists!</div>
    <div class="green-body">
      <ul class="list-list">
        ${stringed}
      </ul>
    </div>
  `;
  return layout(content);
}

const generateLists = (lists: any[]) =>
  lists
    .map(
      (list) => html`<li><a href="/list?id=${list.listID}">${list.title}</a></li> `,
    )
    .join('');

const cleanUp = (items: any) => items.map((item: any) => extractData(item));

const extractData = (input: any) => {
  return Object.entries(input).reduce((prev, cur) => {
    const [key, val]: [string, any] = cur;
    return {
      ...prev,
      [key]: val[Object.keys(val)[0]],
    };
  }, {});
};
