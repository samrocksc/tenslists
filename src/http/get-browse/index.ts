import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';
import { base } from './render-views.ts';
import TensList from './vendor/shared/interfaces/tens-list.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(event: object) {
  const data = await arc.tables();

  const lists = await data.lists.query({
    IndexName: 'byFormState',
    KeyConditionExpression: 'formState = :state',
    ExpressionAttributeValues: {
      ':state': 'completed',
    },
  });

  const listItems = cleanUp(lists.Items) as unknown as TensList[];

  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
    },
    body: base(listItems),
  };
}

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

