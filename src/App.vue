<template>
  <!-- here we can simply use the current state and 
    context, since it's all in the component data already -->
  <Modal
    :current="current"
    :context="context"
    @submit="submit"
    @restart="restart" />
</template>

<script>
import Modal from "./components/Modal.vue";
import { createMachine, interpret } from "xstate";

// we can get this context from anywhere; the important part
// is that we pass it to the state machine config when we
// instantiate it.
const initialContext = {
  name: 'autumn',
  price: '$1,000,000',
}

// the machine definition lives by itself, totally separate from
// all things vue. this could be in its own file for all we care
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
  // start up by saving a pointer to the interpreted
  // machine; also initialize the current state and
  // context from the defaults in the machine.
  data: () => ({
    machine: interpret(machine),
    current: machine.initialState,
    context: machine.context,
  }),

  // when the vue component loads, it starts that
  // interpreted machine and adds an onTransition
  // hook. when the machine state changes, we store
  // the value of the machine in the component context
  created() {
    this.machine
      .onTransition((state) => {
        this.current = state;
        this.context = state.context;
      })
      .start();
  },

  // methods on the vue layer to send commands to
  // the machine. all state transitions should go
  // through this component; child vue components
  // should have zero visibility into how the state
  // is managed. it's messages the whole way down B)
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
