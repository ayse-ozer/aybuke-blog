<template>
  <div>
    <Layout>
      <div class="container-fluid" style="top:60px ">
        <img src="../assets/img/page7.jpg" width="100%" height="100%" />
        <div class="container block-container text-center">
          <h4>NELER YAPIYORUM</h4>
          <HrIcon />
          <div class="row mt-5">
            <div class="col-md-3 mb-4" v-for="(card,index) in workCardValue" :key="index">
              <how-it-works :icon="card.icon" :title="card.title" />
            </div>
          </div>
        </div>
        <!-- <div class="container-fluid">
          <div class="video-container">
            <video autoplay loop="true" width="1280" height="720">
              <source type="video/mp4" src="../assets/img/open-video.mp4" />
            </video>
            <div class="overlay">
              <h1>HTML 5 Video Background with an Overlay</h1>
            </div>
          </div>
        </div>-->

       <online-diyet-card/>

        <who-am-i />
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from "../Layout/Wrappers/appLayout.vue";
import HowItWorks from "./Home/HowItWorks";
import WhoAmI from "./Home/WhoAmI";
import OnlineDiet from "./Home/OnlineDiyetCard";
import HrIcon from "./components/HrIcon";
import OnlineDiyetCard from "./Home/OnlineDiyetCard";

export default {
  components: {
    Layout,
    "how-it-works": HowItWorks,
    "who-am-i": WhoAmI,
    "online-diet":OnlineDiet,
    HrIcon
  },
  data() {
    return {
      workCardValue: [
        {
          icon: require("../assets/img/healthy-eating.png"),
          title: "Ağırlık Kontrolü ve Sağlıklı Beslenme Danışmanlığı"
        },
        {
          icon: require("../assets/img/mother.png"),
          title: "Hamilelik ve Emzirme Döneminde Beslenme Danışmanlığı"
        },
        {
          icon: require("../assets/img/heart-problem.png"),
          title: "Hastalıkların Tedavisinde Beslenme Danışmanlığı"
        },
        {
          icon: require("../assets/img/trainer.png"),
          title: "Sporcu Beslenmesi Danışmanlığı"
        }
      ]
    };
  }
};
</script>