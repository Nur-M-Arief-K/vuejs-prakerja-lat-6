<template>
  <div class="container-lg">
    <h1>{{ getDaftarBerita[+this.$route.params.indexBerita].title }}</h1>
    <p class="fst-italic">{{ getDaftarBerita[+this.$route.params.indexBerita].author }}</p>
    <p>{{ formatTanggal(getDaftarBerita[+this.$route.params.indexBerita].publishedAt) }}</p>
    <br />
    <div class="text-center">
      <img
        ref="articleImgElement"
        :src="getDaftarBerita[+this.$route.params.indexBerita].urlToImage"
        :alt="getDaftarBerita[+this.$route.params.indexBerita].title"
        class="mx-auto"
        @error="displayFallbackImage(this.$refs.articleImgElement, defaultImg)"
        style="max-width: 100%;"
      />
    </div>
    <br />
    <p>
      {{ getDaftarBerita[+this.$route.params.indexBerita].description }} <a :href="getDaftarBerita[+this.$route.params.indexBerita].url" target="_blank">Read more</a>
    </p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { formatTanggal, displayFallbackImage } from "../utils";
import defaultImg from "@/assets/default-img.jpg";

export default {
  data() {
    return {
      defaultImg,
      indexBerita: null
    }
  },
  computed: {
    ...mapGetters(["getDaftarBerita"]),
  },
  methods: {
    displayFallbackImage,
    formatTanggal,
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.scrollToTop();
  },
};
</script>