import { createMachine, interpret } from "xstate";

const initialContext = {
  name: "",
  pronouns: "",
};

export default createMachine({
  id: "machine",
  initial: "form",
  context: initialContext,
  states: {
    form: {
      on: {
        SUBMIT: { target: "postSubmit" },
      },
    },
    postSubmit: {
      on: {
        RESTART: { target: "form" },
      },
    },
  },
});
