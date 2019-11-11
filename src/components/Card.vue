<template>
  <div>
      <div :class="className">
          <div class="wrapper-card">
            <img src="../assets/image_pelakor.jpg" alt="" style="width:70px; border-radius:50%;">
            <h1>{{this.behaviorCard.title}}</h1>
            <p>{{this.behaviorCard.subTitle}}</p>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'button',
    props: {
      behaviorCard: {
        type: Object,
        required: true,
      },
    },
    computed:{
        className() {
          return `card ${this.behaviorCard.type}`;
        }
    }
  };
</script>