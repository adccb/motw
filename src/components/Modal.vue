<template>
  <div class="modal-backdrop">
    <div class="modal-body">

    <!--
      here we pass down additional emit infrastructure (i'm
      absolutely certain there's a more conventional way to do this
      but i'm not up on vue yet lol). we also can use the 
      current.matches function to check our state. comparing
      against current.value is very brittle in the case of child
      states and nested state machines, so it's best practice to
      always use .matches when trying to compare states. this lets
      xstate represent the actual state however it wants internally
      while still giving us something to stick in the v-if calls here. 

      we also pass down the context from App.vue, so each individual
      component can look at the data in the machine. this would be where
      we'd look for coupons, discounts, etc. then the component can do 
      with that data what it will. -->

      <Form
        @submit="$emit('submit')"
        :context="context"
        v-if="current.matches('form')" />

      <Congratulations 
        @restart="$emit('restart')"
        :context="context"
        v-else-if="current.matches('postSubmit')" />
    </div>
  </div>
</template>

<script>
import Congratulations from "./Congratulations.vue";
import Form from "./Form.vue";

export default {
  name: "Modal",
  components: { Form, Congratulations },
  props: {
    current: Object,
    context: Object,
  },
  emits: ['submit', 'restart']
};
</script>

<style scoped>
.modal-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  background: #444444;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  height: 30vh;
  width: 70vw;
  background-color: white;
}
</style>
