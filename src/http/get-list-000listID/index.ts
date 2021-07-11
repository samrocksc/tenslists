import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';
import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';
// import TensList from './vendor/shared/interfaces/tens-list.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(req: any) {
  if (!req?.pathParameters?.listID) {
    return {
      statusCode: 200,
      headers: {
        'cache-control':
          'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8',
      },
      body: nothingFound(),
    };
  }
  console.log('req', req);
  const data = await arc.tables();
  console.log(Object.keys(data));

  const lists = await data.lists.get({ listID: req.pathParameters.listID });
  console.log('lists', lists);

  // const listItems = (cleanUp(lists.Items) as unknown) as TensList[];

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: html`<div></div>`,
  };
}

export const cleanUp = (items: any) => items.map((item: any) => extractData(item));

export const extractData = (input: any) => {
  return Object.entries(input).reduce((prev, cur) => {
    const [key, val]: [string, any] = cur;
    return {
      ...prev,
      [key]: val[Object.keys(val)[0]],
    };
  }, {});
};

export const nothingFound = () => html`<div>Nothing Found</div>`;

