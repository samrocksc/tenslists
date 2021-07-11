import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';

async function route(req: any) {
  console.log('keys', Object.keys(arc));
  const data = await arc.tables();
  console.log('body', req.body);
  console.log('check it', Object.keys(data));

  const body = {
    formState: 'completed',
    listID: 'xxx',
    userID: 'xxx',
    title: 'ted',
    ...req.body,
  };

  await data.lists.put(body);

  console.log('success');
  /* gets items by userId's */
  // const result = await data.lists.query({
  //   KeyConditionExpression: 'userID = :userID',
  //   ExpressionAttributeValues: {
  //     ':userID': 'xxx',
  //   },
  // });

  /* gets all items */
  // const result = await data.lists.query({
  //   KeyConditionExpression: 'formState = :state AND listID = :listID',
  //   ExpressionAttributeValues: {
  //     ':state': 'completed',
  //     ':listID': 'xx2',
  //   },
  // });

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
    location: isLoggedIn ? '/about' : '/',
  };
}

export const handler = arc.http.async(route);
