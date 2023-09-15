<template>
  <div class="row row-cols-1 row-cols-lg-2 g-4">
    <div v-for="(data, index) in dataKartu" :key="index" class="col">
      <KartuInformasi
        :cardImg="data.urlToImage"
        :cardTitle="data.title"
        :cardDescription="data.description"
        :tanggalPembuatanBerita="formatTanggal(data.publishedAt)"
        :indexBerita="index"
      />
    </div>
  </div>
</template>

<script>
import { formatTanggal } from '@/utils';
import KartuInformasi from "./KartuInformasi.vue";

export default {
  props: {
    dataKartu: {
      type: Object,
    },
  },
  components: {
    KartuInformasi,
  },
  methods: {
    formatTanggal
  }
};
</script>