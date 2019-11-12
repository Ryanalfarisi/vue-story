<template>
  <div>
    <v-select placeholder="Select" :class="className" ref="dropdown" :disabled="this.behaviorSelect.disabled" :options="this.behaviorSelect.option"></v-select>
  </div>
</template>

<script>
  import vSelect from 'vue-select';
  export default {
    name: 'inputSelect',
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