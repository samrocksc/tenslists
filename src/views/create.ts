import { html } from 'https://deno.land/x/html@v1.2.0/mod.ts';

import { layout } from './layout.ts';

export function create() {
  const content = html`
    <div class="header">Let's Create!</div>
    <div class="description">This is just a simple form for creating your list!</div>
    <!-- TODO: I need to change to change the font in the input element -->
    <!-- I need to actually call an endpoint with this form -->
    <form name="newThing" method="post" action="/submit-list">
      <div class="list-form">
        <div class="item-text">
          <label for="title" class="input-label">Top Ten.....</label>
          <br />
          <input type="text" name="title" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item1" class="input-label">Item 1:</label>
          <input type="text" name="item1" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item2" class="input-label">Item 2:</label>
          <input type="text" name="item2" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item3" class="input-label">Item 3:</label>
          <input type="text" name="item3" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item4" class="input-label">Item 4:</label>
          <input type="text" name="item4" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item5" class="input-label">Item 5:</label>
          <input type="text" name="item5" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item6" class="input-label">Item 6:</label>
          <input type="text" name="item6" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item7" class="input-label">Item 7:</label>
          <input type="text" name="item7" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item8" class="input-label">Item 8:</label>
          <input type="text" name="item8" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item9" class="input-label">Item 9:</label>
          <input type="text" name="item9" class="text-input" />
        </div>
        <div class="item-text">
          <label for="item10" class="input-label">Item 10:</label>
          <input type="text" name="item10" class="text-input" />
          <div>
            <button class="link">Submit</button>
          </div>
        </div>
      </div>
    </form>
  `;
  return layout(content);
}
