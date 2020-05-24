new Vue({
    el: '#app',
    data: {
        renderingAbout: true,
        renderingMusic: false,
        renderingArt: false,
        renderingBodyArt: false,
        renderingDance: false,
        traditionalArtImages: [
            '../img/traditionalArt1.jpg',
            '../img/traditionalArt2.jpg',
            '../img/traditionalArt3.jpg',
            '../img/traditionalArt4.jpg',
            '../img/traditionalArt5.jpg',
            '../img/traditionalArt6.jpg',
            '../img/traditionalArt7.jpg',
            '../img/traditionalArt8.jpg',
            '../img/traditionalArt9.jpg',
            '../img/traditionalArt10.jpg',
            '../img/traditionalArt11.jpg',
            '../img/traditionalArt12.jpg',
            '../img/traditionalArt13.jpg',
            '../img/traditionalArt14.jpg'
        ],
        bodyArtImages: [
            '../img/bodyArt1.jpg',
            '../img/bodyArt2.jpg',
            '../img/bodyArt3.jpg',
            '../img/bodyArt4.jpg',
            '../img/bodyArt5.jpg',
            '../img/bodyArt6.jpg'
        ],
        //carouselJS
        imageCarousel: true,
        selectedItemIndex: 0,
        //TODO: see if this method works
        //selectedItem: this.bodyArtImages[this.selectedItemIndex]
    },
    methods: {
        renderAbout: function () {
            this.renderingAbout = true;
            this.renderingMusic = false;
            this.renderingArt = false;
            this.renderingDance = false;
        },
        renderMusic: function () {
            this.renderingAbout = false;
            this.renderingMusic = true;
            this.renderingArt = false;
            this.renderingDance = false;
        },
        renderArt: function () {
            this.renderingAbout = false;
            this.renderingMusic = false;
            this.renderingArt = true;
            this.renderingDance = false;
        },
        renderDance: function () {
            this.renderingAbout = false;
            this.renderingMusic = false;
            this.renderingArt = false;
            this.renderingDance = true;
        },
        //carousel JS
        nextImage: function() {
            this.selectedItemIndex = Math.min(this.selectedItemIndex + 1, this.bodyArtImages - 1)
        },
        previousImage: function() {
            this.selectedItemIndex = Math.max(0, this.selectedItemIndex - 1)
        }
    }
})