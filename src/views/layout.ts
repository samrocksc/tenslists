import { html } from 'https://raw.githubusercontent.com/denomod/deno_html/v1.2.0/mod.ts';
import { footer } from './footer.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export function layout(body: any) {
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
