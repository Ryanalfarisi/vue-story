<template>
  <div>
      <div :class="className">
        <div class="card-body">
          <div class="card-icon"><img src="../assets/image_pelakor.jpg" alt=""/></div>
          <div class="card-title">{{this.behaviorCard.title}}</div>
          <div class="card-subtitle">{{this.behaviorCard.subTitle}}</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'card',
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