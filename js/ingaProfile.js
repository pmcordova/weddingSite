new Vue({
  el: '#app',
  data: {
    renderingHome: true,
    renderingMusic: false,
    renderingArt: false,
    renderingDance: false
  },
  methods: {
    renderHome: function() {
      this.renderingHome = true;
      this.renderingMusic = false;
      this.renderingArt = false;
      this.renderingDance = false;
    },
    renderMusic: function() {
      this.renderingHome = false;
      this.renderingMusic = true;
      this.renderingArt = false;
      this.renderingDance = false;
    },
    renderArt: function() {
      this.renderingHome = false;
      this.renderingMusic = false;
      this.renderingArt = true;
      this.renderingDance = false;
    },
    renderDance: function() {
      this.renderingHome = false;
      this.renderingMusic = false;
      this.renderingArt = false;
      this.renderingDance = true;
    }
  }
})