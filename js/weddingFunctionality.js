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
            this.backgroundImage = "../img/ceremony_page.JPG";
        },
        renderReceptionPage: function () {
            this.currentPage = "RECEPTION";
            this.backgroundImage = "../img/reception_page.JPG";
        },
        renderRegistryPage: function () {
            this.currentPage = "REGISTRY";
            this.backgroundImage = "../img/registry_page.JPG";
        },
        renderRsvpPage: function() {
            this.currentPage = "RSVP";
            this.backgroundImage = "../img/rsvp_page.JPG";
        }
    }
})