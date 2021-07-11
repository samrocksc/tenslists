import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';
import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';
import TensList from './vendor/shared/interfaces/tens-list.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(req: any) {
  if (!req?.pathParameters?.listID) {
    return notFound();
  }
  const data = await arc.tables();

  const list: TensList = await data.lists.get({ listID: req.pathParameters.listID });
  console.log('lists', list);

  if (!list) {
    return htmlError('ID Not Found');
  }

  // const listItems = (cleanUp(lists.Items) as unknown) as TensList[];

  return htmlText(listFound(list));
}

const listFound = (list: TensList) => {
  return html` <div>
    <div>${list.title}</div>
    <ul>
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
  </div>`;
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
      'content-type': 'text/html; charset=utf8',
    },
    body,
  });
};

const htmlError = returnHTML(404);
const htmlText = returnHTML(200);

