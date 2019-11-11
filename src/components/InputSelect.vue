<template>
<div style="width:200px;">
  <v-select placeholder="Select" class="style-chooser" :options="this.task.option"></v-select>
</div> 
</template>

<style>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: #36454c;
    border: none;
    color: #fff;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #fff;
  }
</style>
<script>
  import vSelect from 'vue-select';
  export default {
    name: 'task',
    props: {
      task: {
        type: Object,
        required: true,
      },
    },
    components:{
      vSelect
    },
    computed: {
      // taskClass() {
      //   return `list-item ${this.task.state}`;
      // },
      // isChecked() {
      //   return this.task.state === 'TASK_ARCHIVED';
      // },
    },
  };
</script>