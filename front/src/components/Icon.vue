<template>
  <i :class="`${name}`"></i>
</template>
<script>
  export default {
    name: 'Icon',
    props: {
      name: String
    }
  }
</script>
<style>
@import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
