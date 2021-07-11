import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';

import { layout } from './vendor/views/layout.js';
import TensList from './vendor/shared/interfaces/tens-list.ts';

export function base(lists: TensList[]) {
  const stringed = generateLists(lists);
  const content = html`
    <div class="header">Browse Other Lists!</div>
    <div class="description">below is a list of lists!</div>
    <div class="green-body">
      <ul class="list-list">
        ${stringed}
      </ul>
    </div>
  `;
  return layout(content);
}

const generateLists = (lists: any[]) =>
  lists
    .map((list) => html`<li><a href="/list/${list.listID}">${list.title}</a></li> `)
    .join('');
