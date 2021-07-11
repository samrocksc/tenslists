import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';

import { layout } from './layout.js';

export function testing() {
  const testing = html`<h1>tester</h1>`;
  return layout(testing);
}
