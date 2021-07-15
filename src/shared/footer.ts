import { html } from 'https://raw.githubusercontent.com/denomod/deno_html/v1.2.0/mod.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export function footer(): string {
  return html`
    <footer>made by <a href="https://cowabunga.dev">sam clark</a></footer>
  `;
}
