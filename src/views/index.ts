import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';

import { layout } from './layout.js';

export function index() {
  const content = html`
    <div class="parent">
      <div class="content">
        <div class="header">Welcome To The Tens List</div>
        <div class="description">
          The Tens list is a place where you can simply create a top 10 list! That's
          it!
        </div>
        <div class="link-container">
          <a href="/create-list" class="link">create</a>
          <a href="/browse" class="link">browse</a>
        </div>
      </div>
    </div>
  `;
  return layout(content);
}
