<template>
  <div class="hr-theme-slash-2">
    <div class="hr-line"></div>
    <div class="hr-icon">
      <font-awesome-icon icon="leaf" />
    </div>
    <div class="hr-line"></div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faLeaf);
export default {
    components:{
    "font-awesome-icon": FontAwesomeIcon,
    }
}
</script>