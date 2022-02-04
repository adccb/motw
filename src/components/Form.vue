<template>
  <p>i'm a form!</p>
  <button @click="$emit('submit')">submit</button>
  <hr />
  <p>context:</p>
  <code>
    {{ JSON.stringify(context, null, 2) }}
  </code>
</template>

<script>
export default {
  name: "Form",
  props: {
    context: Object
  },
  emits: ["submit"],
};
</script>

<style scoped>
</style>
