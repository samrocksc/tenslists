import arc from 'https://raw.githubusercontent.com/architect/functions-deno/main/src/index.js';
import { faker } from 'https://deno.land/x/deno_faker@v1.0.3/mod.ts';
import { v4 } from 'https://deno.land/std@0.100.0/uuid/mod.ts';
import TensList from './interfaces/tens-list.ts';

export default async function () {
  const data = await arc.tables();

  const generateBody = (): TensList => ({
    formState: 'completed',
    listID: v4.generate(),
    userID: v4.generate(),
    title: `My Favorite ${faker.lorem.word()}`,
    item1: faker.lorem.sentence(),
    item2: faker.lorem.sentence(),
    item3: faker.lorem.sentence(),
    item4: faker.lorem.sentence(),
    item5: faker.lorem.sentence(),
    item6: faker.lorem.sentence(),
    item7: faker.lorem.sentence(),
    item8: faker.lorem.sentence(),
    item9: faker.lorem.sentence(),
    item10: faker.lorem.sentence(),
  });

  await data.lists.put(generateBody());
  await data.lists.put(generateBody());
  await data.lists.put(generateBody());
  await data.lists.put(generateBody());
  await data.lists.put(generateBody());

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
