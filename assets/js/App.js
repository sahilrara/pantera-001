// fuction for handle navbar
const handldeOverlayActive = () => {
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("active-nav-overlay");
};
//////////////////// trust slider  //////////////////
$('.trustz_us_slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "-10",
    responsive: [{
            breakpoint: 1300,
            settings: {
                arrows: false,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                centerPadding: "-20",
                arrows: false,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
            },
        },
    ],
});
//////////////////// Products slider 2//////////////////
$('.products_slider').slick({
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".left_silder2_arrow"),
    nextArrow: $(".right_silder2_arrow"),
    responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: false,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});
//////////////////// Client slider 3 //////////////////
$(".Client_slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "430px",
    responsive: [{
            breakpoint: 1536,
            settings: {
                centerPadding: "270px",
            },
        },
        {
            breakpoint: 1199,
            settings: {
                centerPadding: "120px",
            },
        },
        {
            breakpoint: 767,
            settings: {
                centerPadding: "80px",
            },
        },
        {
            breakpoint: 575,
            settings: {
                centerMode: false,
                centerPadding: "0px",
            },
        },
    ],
});
////////////////////Maximize Your Wealth with slider 1//////////////////
$('.investment_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    prevArrow: $(".left_silder_arrow"),
    nextArrow: $(".right_silder_arrow"),
    responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2.7,
                arrows: false,
                autoplay: true,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.67,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});