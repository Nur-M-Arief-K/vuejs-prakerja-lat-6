<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <GrupKartuInformasi :dataKartu="getDaftarBerita" />
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatTanggal } from "../utils";
import GrupKartuInformasi from "../components/GrupKartuInformasi.vue";

export default {
  computed: {
    ...mapGetters(["getJumlahBerita", "getDaftarBerita"]),
  },
  methods: {
    ...mapActions(["fetchBerita"]),
    formatTanggal,
  },
  created() {
    this.getJumlahBerita == 0 && this.fetchBerita();
  },
  components: {
    GrupKartuInformasi,
  },
};
</script>