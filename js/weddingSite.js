new Vue({
    el: '#app',
    data: {
        currentPage: "HOME",
        backgroundImage: "../img/home_background.png"
    },
    methods: {
        renderHomePage: function () {
            this.currentPage = "HOME";
            this.backgroundImage = "../img/home_background.png"
        },
        renderCeremonyPage: function () {
            this.currentPage = "CEREMONY";
        },
        renderReceptionPage: function () {
            this.currentPage = "RECEPTION";
        },
        renderRegistryPage: function () {
            this.currentPage = "REGISTRY";
        },
        renderRsvpPage: function() {
            this.currentPage = "RSVP";
        }
    }
})