require(["jquery","carousel","navigation"],function($) {
    $(".boxs-content2 ").owlCarousel({
        autoPlay: 1000,
        margin:5,
        items : 5,
        nav : true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});