<template>
  <div >
     <div class="light-pagination pagination">
            <a href="#">&laquo;</a>
            <a href="#">1</a>
            <a href="#" class="active">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">...</a>
            <a href="#">10</a>
            <a href="#">&raquo;</a>
          </div>
  </div>
</template>
<style>
  .col{width:200px;float:left;text-align: center;padding:20px;}
</style>
<script>
  export default {
    name: 'Typecolor',
    props: {
      behaviorColor: {
        type: Object,
        required: true,
      },
    }
  };
</script>
