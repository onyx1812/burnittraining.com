<template></template>
<script>
export default {
  name: 'Klaviyo',
  mounted(){
    let klaviyo = document.createElement('script');
    klaviyo.setAttribute('src', 'https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=XDGXFa');
    klaviyo.setAttribute('type', 'text/javascript');
    klaviyo.async = true;
    document.body.appendChild(klaviyo);
  }
}
</script>
