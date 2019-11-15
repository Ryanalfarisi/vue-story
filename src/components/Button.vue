<template>
  <v-fragment>
      <button :class="className">{{titleName}}</button>
  </v-fragment>
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