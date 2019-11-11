<template>
  <div>
      <button :class="className">{{titleName}}</button>
  </div>
</template>

<script>
  export default {
    name: 'button',
    props: {
      behaviorButton: {
        type: Object,
        required: true,
      },
    },
    computed:{
        className() {
          return `button ${this.behaviorButton.shape} ${this.behaviorButton.type}`;
        },
        titleName(){
          return this.behaviorButton.title
        }
    }
  };
</script>