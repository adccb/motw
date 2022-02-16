<template>
  <Modal
    :current="current"
    :context="context"
    @submit="submit"
    @restart="restart" />
</template>

<script>
import Modal from "./components/Modal.vue";
import { createMachine, interpret } from "xstate";

const initialContext = {
  name: 'autumn',
  price: '$1,000,000',
}

const machine = createMachine(
  {
    id: "machine",
    initial: "form",
    // pass through the initial context just so we have it
    context: initialContext,

    // simple states that transition between each other 
    // on the SUBMIT and RESTART messages (also check out
    // how nicely these three brackets line up 🙏) 
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
  } 
);

export default {
  name: "App",
  data: () => ({
    machine: interpret(machine),
    current: machine.initialState,
    context: machine.context,
  }),
  created() {
    this.machine
      .onTransition((state) => {
        this.current = state;
        this.context = state.context;
      })
      .start();
  },
  methods: {
    submit() {
      this.machine.send("SUBMIT");
    },
    restart() {
      this.machine.send("RESTART");
    }
  },
  components: {
    Modal: Modal,
  },
};
</script>
