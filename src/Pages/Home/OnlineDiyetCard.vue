<template>
    <div class="container-fluid block-container text-center">
          <h4>ONLİNE DİYET</h4>
          <HrIcon />
          <div class="container mt-4 text-center">
  <b-card-group deck>
    <b-card title="Title" border-variant="warning">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" border-variant="warning">
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    
    <b-card title="Title" border-variant="warning">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
    <b-card title="Title" border-variant="warning">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>
</div>
</template>
<script>
import HrIcon from "../components/HrIcon"

export default {
    components:{
        HrIcon
    }
}
</script>