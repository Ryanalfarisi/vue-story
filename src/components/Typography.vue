<template>
  <div style="margin:20px;">
    <h1>H1 Example Text (40px)</h1>
    <h2>H2 Example Text (30px)</h2>
    <h3>H3 Example Text (20px)</h3>
    <h4>H4 Example Text (15px)</h4>
    <h5>H5 Example Text (12px)</h5>
    <h6>H6 Example Text (10px)</h6>    
  </div>
</template>

<script>
  export default {
    name: 'typography',
    props: {
      behaviorTypo: {
        type: Object,
        required: true,
      },
    }
  };
</script>