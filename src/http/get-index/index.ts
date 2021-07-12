import { index } from './vendor/views/index.ts';

// import setup from './vendor/shared/setup.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export async function handler(_req: any) {
  // await setup();
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
    },
    body: index(),
  };
}
