Vue.component("construction-notice", {
    template: `<div class="fullWidth flexContainer itemsCenterAligned justifyContentCenter constructionNotice">
                    <div class="fullHeight flexContainer justifyContentCenter constructionImage">
                        <img src="../img/under_construction.png">
                    </div>
                    <div class="fullHeight padded flexContainer justifyContentCenter itemsCenterAligned constructionNote">
                        Like our wedding, the specifics of this page are still being finalized. Stay tuned as we work out the details and add more info to our site!
                    </div>
                </div>`
});

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