import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';
import { v4 } from 'https://deno.land/std@0.100.0/uuid/mod.ts';

async function route(req: any) {
  const data = await arc.tables();

  const body = {
    formState: 'completed',
    listID: v4.generate(),
    userID: 'xxx',
    title: 'ted',
    ...req.body,
  };

  await data.lists.put(body);

  /* testing */
  const result = await data.lists.query({
    IndexName: 'byFormState',
    KeyConditionExpression: 'formState = :state',
    ExpressionAttributeValues: {
      ':state': 'completed',
    },
  });
  console.log('result', result);

  let isLoggedIn = false;
  return {
    session: { isLoggedIn },
    location: isLoggedIn ? '/about' : '/browse',
  };
}

export const handler = arc.http.async(route);
