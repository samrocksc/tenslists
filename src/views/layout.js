import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';
import { footer } from './footer.js';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export function layout(body) {
  return html`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="_static/awesome.css" />
      </head>
      <body>
        <div class="parent">
          <div class="content">${body}</div>
          ${footer()}
        </div>
      </body>
    </html>
  `;
}
