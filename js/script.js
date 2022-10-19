$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay: true,
    dots:true,
    smartSpeed:1000,
    margin:24,
    navText: ["PREV", "NEXT"],
    dots: true,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:2,
        },
        1140:{
            items:4,
        }
    }
})