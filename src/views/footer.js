import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';

// learn more about HTTP functions here: https://arc.codes/primitives/http
export function footer() {
  return html`
    <footer>made by <a href="https://cowabunga.dev">sam clark</a></footer>
  `;
}
