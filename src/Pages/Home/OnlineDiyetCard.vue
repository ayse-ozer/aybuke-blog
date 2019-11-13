<template>

    <div class="container-fluid block-container text-center">
          <h4>ONLİNE DİYET</h4>
          <HrIcon />
          <div class="container mt-4 text-center">
  <b-card-group deck>
    <b-card title="1 Aylık Takipli Online Diyet" footer-bg-variant="warning">
      <b-card-text>
      <hr class="mt-0">
      <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                  Kişiye Özel Beslenme Programı
                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                  Beslenme Eğitimi
                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
Tarif ve Değişim Listeleri
                  
                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                  Her gün whatsapp üzerinden bireyse kontrol ve sıkı takip

                </div>


      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">170 ₺</small>
      </template>
    </b-card>

    <b-card title="3 Aylık Takipli Online Diyet" footer-bg-variant="success">
      <b-card-text>
      <hr class="mt-0">
       <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                  Kişiye Özel Beslenme Programı
                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                  Beslenme Eğitimi
                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
Tarif ve Değişim Listeleri
                  
                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                  Her gün whatsapp üzerinden bireyse kontrol ve sıkı takip

                </div>

      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">450 ₺</small>
      </template>
    </b-card>

    <b-card title="1 Aylık Takipsiz Online Diyet" footer-bg-variant="warning">
      <b-card-text>
      <hr class="mt-0">
      
      <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                         Kişiye Özel Beslenme Programı

                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                 Beslenme Eğitimi 

                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
15 günde bir Kontrol

                  
                </div>

      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted mb-0">90 ₺</small>
      </template>
    </b-card>
    <b-card title="3 Aylık Takipsiz Online Diyet" footer-bg-variant="success">
      <b-card-text>
      <hr class="mt-0">

      <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                         Kişiye Özel Beslenme Programı

                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
                 Beslenme Eğitimi 

                </div>
                <div class="user-content-text">
                  <img src="../../assets/img/checkicon2.png" class="icon-check" alt width="20" height="20" />
15 günde bir Kontrol

                  
                </div>
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted"> 250 ₺</small>
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
<style scoped>

.bg-success {
  border-top: 1px solid #60ba62 !important;
  background-color: #60ba62 !important;
}
.bg-warning {
  border-top: 1px solid #f7ca18 !important;
  background-color: #f7ca18 !important;
}
.card-title{
  font-size:14px !important;
   margin-bottom:10px;

}
.card-text{
  font-size:13px;
  text-align:left;
}
.card{
  border: 1px solid transparent !important;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;
  border-raduis:0.25rem;
}
.card-body{
  padding-left:15px;
}
.card-footer .text-muted {
    color: #fff !important;
    font-size: 15px;
    font-weight: bold;
}
 .user-content-text {
   font-size: 12px;
   text-align: left;
   font-weight: 600;
   margin-bottom:10px;
 }
 .icon-check{
   margin-top:-3px;
 }
 
</style>