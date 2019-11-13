<template>
  <div class="container-fluid block-container text-center">
    <h4>BEN KİMİM</h4>
    <HrIcon />
    <div class="container mt-4 text-center">
      <div class="d-flex justify-content-center align-items-center h-body">
        Merhabalar ben Diyetisyen Aybüke Ballıca 2018 Haziran ayında İstanbul Arel Üniversitesinden mezun olarak lisans eğitimimi tamamladım. Çatalca İlyas Çokay devlet hastanesi, Kanuni Sultan Süleyman Eğitim ve Araştırma hastanesi, Beylikdüzü sağlık işleri müdürlüğü, Dr. Alper Çelik Metabolik Cerrahi gibi yerlerde gelişerek ve öğrenerek, eğitimim amaçlı çalıştım. Şuan İstanbul B-fit mimaroba şubesinde hizmet vermekte ve catering alanında çalışmaktayım. Online diyet hizmetide vermekteyim ve bire bir ilgilendiğim için bu alanda olmak beni mutlu ve tatmin ediyor.
        2017 yılında YGA zirvesine katılmaya hak kazanarak girişimci ruhumu keşfettim. Bir diyetisyen olarak hayalim ve hedefim ekonomik yetersizliklerin sonucuyla alım gücünün düşmesiyle ortaya çıkan beslenme sorunlarına, çözüm getirebilen bir diyetisyen olmak. Hayallerime inandım. 2018 yılında Hamdi Ulukaya Girişimi programına bu hayalimle katılıp 24 finalistten biri oldum. Umarım sizlerde bu yolculukta hikayemin birer parçası olursunuz.
      </div>
    </div>
  </div>
</template>

<script>
import HrIcon from "../components/HrIcon";
export default {
  components: {
    HrIcon
  }
};
</script>

<style scoped>
.container-fluid {
  background-color: #f5f5f5;
  margin-bottom: 50px;
  margin: 40px 0px;
}
.block-container {
  padding: 60px 0px;
}
.container {
  font-size: 16px;
  max-width: 1200px;
}
.h-body {
  height: 100%;
  max-height: 60vh;
}
</style>