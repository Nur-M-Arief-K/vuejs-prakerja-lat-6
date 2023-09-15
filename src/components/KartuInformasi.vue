<template>
  <div class="card">
    <div class="card-header" @click="navigasiKeArtikel()">
      <h2 class="card-title fs-6 fs-md-2">{{ cardTitle }}</h2>
      <p class="card-text fs-6">{{ tanggalPembuatanBerita }}</p>
    </div>
    <div class="card-img-container">
      <img
        ref="cardImageElement"
        class="card-img"
        :src="cardImg"
        :alt="cardTitle"
        @click="navigasiKeArtikel()"
        @error="displayFallbackImage(this.$refs.cardImageElement, defaultImg)"
      />
    </div>
    <div class="card-body">
      <p class="card-text fs-6 fs-md-2">{{ cardDescription }}</p>
    </div>
  </div>
</template>

<script>
import defaultImg from '@/assets/default-img.jpg';
import {displayFallbackImage} from '../utils';

export default {
  data() {
    return {
      defaultImg
    }
  },
  props: {
    cardImg: {
      type: String,
      required: true,
    },
    cardTitle: {
      type: String,
      required: true,
    },
    cardDescription: {
      type: String,
    },
    tanggalPembuatanBerita: {
      type: String,
    },
    indexBerita: {
      type: Number,
    }
  },
  methods: {
    displayFallbackImage,
    navigasiKeArtikel() {
      const slug = this.cardTitle.toLowerCase().split(/[\W_]+/g).join('-');
      this.$router.push(`/${this.indexBerita}/${slug}`)
    }
  }
};
</script>

<style scoped>
.card-header,
.card-img-container
:hover {
  cursor: pointer !important;
}
</style>