<template>
  <div>
      <input :class="className" type="text" :value="this.behaviorInput.text">
  </div>
</template>

<script>
  export default {
    name: 'button',
    props: {
      behaviorInput: {
        type: Object,
        required: true,
      },
    },
    computed:{
        className() {
          return `input ${this.behaviorInput.type}`;
        },
    }
  };
</script>