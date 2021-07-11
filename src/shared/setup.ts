import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';

export default async function () {
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
    item8: 'item eight',
    item9: 'item nine',
    item10: 'item ten',
  };

  await data.lists.put(body);
  await data.lists.put({
    ...body,
    listID: 'xx1',
    title: 'my favorite linux distros',
  });
  await data.lists.put({ ...body, listID: 'xx2', title: 'my favorite websites' });
  await data.lists.put({ ...body, listID: 'xx3', title: 'my favorite teachers' });

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
}
