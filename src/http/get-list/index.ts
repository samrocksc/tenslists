import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';
import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';

import TensList from './vendor/shared/interfaces/tens-list.ts';
import { layout } from './vendor/views/layout.js';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(req: any) {
  if (!req?.queryStringParameters?.id) {
    return htmlError(html`<div class="header">No ID was provided</div>`);
  }
  const data = await arc.tables();

  const list: TensList = await data.lists.get({
    listID: req?.queryStringParameters?.id,
  });

  if (!list) {
    return htmlError(html`<div class="header">That list was not found</div>`);
  }

  return htmlText(content(list));
}

const content = (list: TensList) => {
  return html`<div>
    <div class="header">${list.title}</div>
    <div class="green-body">
      <ul class="list-display">
        <li>${list.item1}</li>
        <li>${list.item2}</li>
        <li>${list.item3}</li>
        <li>${list.item4}</li>
        <li>${list.item5}</li>
        <li>${list.item6}</li>
        <li>${list.item7}</li>
        <li>${list.item8}</li>
        <li>${list.item9}</li>
        <li>${list.item10}</li>
      </ul>
    </div>
  </div> `;
};

const notFound = () => ({
  statusCode: 404,
  headers: {
    'content-type': 'text/html; charset=utf8',
  },
  body: nothingFound(),
});

export const nothingFound = () => html`<h1>Nothing Found</h1>`;

const returnHTML = (statusCode: number) => {
  return (body: string) => ({
    statusCode,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: layout(body),
  });
};

const htmlError = returnHTML(404);
const htmlText = returnHTML(200);
