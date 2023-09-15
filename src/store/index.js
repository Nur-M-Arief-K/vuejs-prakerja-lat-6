import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  plugins: [createPersistedState()],
  state: {
    daftarBerita: [],
  },
  getters: {
    getJumlahBerita({ daftarBerita }) {
      return daftarBerita.length;
    },
    getDaftarBerita({ daftarBerita }) {
      return daftarBerita;
    },
  },
  mutations: {
    tambahDaftarBerita({daftarBerita}, beritaBaru) {
      beritaBaru.forEach(berita => {
        daftarBerita.push(berita);
      });
    },
  },
  actions: {
    async fetchBerita({ commit }) {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us', {
          method: "GET",
          headers: {
            'X-Api-Key': 'd4b3e14caad9421bab00fb098c277d62'
          }
        });
        const result = await response.json();
        const beritaBaru = result.articles;
        commit('tambahDaftarBerita', beritaBaru);
      } catch(error) {
        console.log('[VUEX ACTION] Error mengambil berita', error)
      }
    }
  },
})
