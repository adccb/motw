<template>
  <p>congrats</p>
  <button @click="$emit('restart')">return</button>
  <hr />
  <p>context:</p>
  <code>
    {{ JSON.stringify(context, null, 2) }}
  </code>
</template>

<script>
export default {
  name: "Congratulations",
  props: {
    context: Object,
  },
  emits: ["restart"]
};
</script>

<style scoped>
</style>
