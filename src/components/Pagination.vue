<template>
  <div >
    <div style="margin:20px">
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
    <div style="margin:20px">
      <div class="dark-pagination pagination">
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
  </div>

</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      behaviorPagination: {
        type: Object,
        required: true,
      },
    }
  };
</script>