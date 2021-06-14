import Store from "https://unpkg.com/beedle@0.8.1/dist/beedle.js";

const storeName = "myStore";

// Set actions, mutations and initial state
const actions = {
  saySomething(context, payload) {
    context.commit("setMessage", payload);
  },
  radioUpdate(context, payload) {
    context.commit("setRadio", payload);
  },
  addItem(context, payload) {
    context.commit("addToList", payload);
  },
};

const mutations = {
  setMessage(state, payload) {
    state.message = payload;
    return state;
  },
  setRadio(state, payload) {
    state.radios = payload;
    return state;
  },
  addToList(state, payload) {
    state.form = payload;
    return state;
  },
};

const initialState = {
  message: "Hello, world",
};

const checkStore = () => localStorage.getItem(storeName);

const functionalSubscribe = (store) => {
  // Grab the text element and attach it to the stateChange event
  const messageElement = document.querySelector(".js-message-element");

  console.log("window.location.href", window.location.pathname);
  const path = window.location.pathname;

  if (path === "/samplecode") {
    store.subscribe((state) => {
      messageElement.innerText = state.message;
      localStorage.setItem(storeName, JSON.stringify(state));
    });
    // Grab the textearea and dispatch the action on 'input'
    const textElement = document.querySelector("textarea");
    console.log("textElement", textElement);

    // NOTE: :P I had never done this with vanilla javascript
    // Adds event listeners to a button grouped by name
    const radioButtons = document.getElementsByName("drone");
    radioButtons.forEach((button) => {
      console.log("store", store.state.radios);
      if (store.state.radios === button.value) {
        button.checked = true;
      }
      button.addEventListener("change", () => {
        store.dispatch("radioUpdate", button.value);
      });
    });

    textElement.addEventListener("input", () => {
      // Dispatch the action, which will subsequently pass this message to the mutation
      // which in turn, updates the store's state
      store.dispatch("saySomething", textElement.value.trim());
    });
  }

  console.log("store.state", store.state);
  store.dispatch("saySomething", store.state.message);
};

const makeOrCreateStore = () => {
  const storeCheck = JSON.parse(checkStore());
  if (storeCheck) {
    console.log("storeCheck", storeCheck);
    const store = new Store({
      actions,
      mutations,
      initialState: storeCheck,
    });
    functionalSubscribe(store);
    // NOTE: the store is correct now, but the elements are not updated
    // TODO: Find a way to update values this before the elements render
    return store;
  }
  functionalSubscribe(
    new Store({
      actions,
      mutations,
      initialState,
    })
  );
};

// Create our store instance
makeOrCreateStore();
