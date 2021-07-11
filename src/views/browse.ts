import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';

import { layout } from './layout.js';
import TensList from './vendor/shared/interfaces/tens-list.ts';

export function base(lists: TensList[]) {
  const content = html`
    <div class="parent">
      <div class="content">
        <div class="header">Browse Other Lists!</div>
        <div class="description">below is a list of lists!</div>
        <div>
          <ul></ul>
        </div>
      </div>
    </div>
  `;
  return layout(content);
}

export function generateLists() {}
