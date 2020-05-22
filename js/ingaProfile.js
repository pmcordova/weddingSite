new Vue({
    el: '#app',
    data: {
        renderingAbout: true,
        renderingMusic: false,
        renderingArt: false,
        renderingBodyArt: false,
        renderingDance: false,
        traditionalArtImages: [
            'traditionalArt1.jpg',
            'traditionalArt2.jpg',
            'traditionalArt3.jpg',
            'traditionalArt4.jpg',
            'traditionalArt5.jpg',
            'traditionalArt6.jpg',
            'traditionalArt7.jpg',
            'traditionalArt8.jpg',
            'traditionalArt9.jpg',
            'traditionalArt10.jpg',
            'traditionalArt11.jpg',
            'traditionalArt12.jpg',
            'traditionalArt13.jpg',
            'traditionalArt14.jpg'
        ],
        bodyArtImages: [
            'bodyArt1.jpg',
            'bodyArt2.jpg',
            'bodyArt3.jpg',
            'bodyArt4.jpg',
            'bodyArt5.jpg',
            'bodyArt6.jpg'
        ]
    },
    methods: {
        renderAbout: function () {
            this.renderingAbout = true;
            this.renderingMusic = false;
            this.renderingArt = false;
            this.renderingBodyArt = false;
            this.renderingDance = false;
        },
        renderMusic: function () {
            this.renderingAbout = false;
            this.renderingMusic = true;
            this.renderingArt = false;
            this.renderingBodyArt = false;
            this.renderingDance = false;
        },
        renderArt: function () {
            this.renderingAbout = false;
            this.renderingMusic = false;
            this.renderingArt = true;
            this.renderingBodyArt = false;
            this.renderingDance = false;
        },
        renderBodyArt: function () {
            this.renderingAbout = false;
            this.renderingMusic = false;
            this.renderingArt = false;
            this.renderingBodyArt = true;
            this.renderingDance = false;
        },
        renderDance: function () {
            this.renderingAbout = false;
            this.renderingMusic = false;
            this.renderingArt = false;
            this.renderingBodyArt = false;
            this.renderingDance = true;
        }
    }
})