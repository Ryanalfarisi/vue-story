<template>

<div style="width:200px;">
  <v-select placeholder="Select" :class="className" ref="dropdown" :options="this.behaviorSelect.option"></v-select>
</div> 
</template>

<script>
  import vSelect from 'vue-select';
  export default {
    name: 'task',
    props: {
      behaviorSelect: {
        type: Object,
        required: true,
      },
    },
    components:{
      vSelect
    },

    mounted() {
      if(this.behaviorSelect.prefix == 'open') {
        const dropdown  = this.$refs.dropdown
        dropdown.select()
      }
    },
    computed:{
      className() {
        return this.behaviorSelect.prefix
      }
    }
  };
</script>