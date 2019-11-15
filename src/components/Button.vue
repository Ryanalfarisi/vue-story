<template>
  <fragment>
      <button :class="className">{{titleName}}</button>
  </fragment>
</template>

<script>
  import { Fragment } from 'vue-fragment'
  export default {
    name: 'mybutton',
    props: {
      behaviorButton: {
        type: Object,
        required: true,
      },
    },
    components:{
      Fragment
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