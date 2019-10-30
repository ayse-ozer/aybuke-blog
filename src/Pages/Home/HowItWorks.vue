<template>
  <div>
    <div class="work-icon text-center">
      <img class="img-responsive" :src="icon" width="100%" height="100%" />
    </div>
    <div class="work-title pl-3 pr-3">{{ title }}</div>
  </div>
</template>
<script>
export default {
  props: ["icon", "title"],
  data() {
    return {};
  }
};
</script>