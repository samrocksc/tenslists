import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';

async function route(req: any) {
  const data = await arc.tables();

  const body = {
    formState: 'completed',
    listID: 'xxx',
    userID: 'xxx',
    title: 'ted',
    item1: 'item one',
    item2: 'item one',
    item3: 'item one',
    item4: 'item one',
    item5: 'item one',
    item6: 'item one',
    item7: 'item one',
    item8: 'item one',
    item9: 'item one',
  };

  await data.lists.put(body);
  await data.lists.put({ ...body, listID: 'xx1' });
  await data.lists.put({ ...body, listID: 'xx2' });
  await data.lists.put({ ...body, listID: 'xx3' });

  console.log('success');
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

