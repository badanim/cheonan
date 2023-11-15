$(function() {
    $('.bar').addClass('bar_ani');




    // 이슈
    var swiper = new Swiper(".mySwiper", {
        autoplay: true,
        speed: 2000,
        loop: true,
        loopAdditionalSlides:1,
        effect: "fade",
        disableOnInteraction: false,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' <span>―</span> ' + '<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: ".swiper_controller .swiper-button-next",
            prevEl: ".swiper_controller .swiper-button-prev",
        },
    });

    // 분야별정보
    var info_swiper = new Swiper(".info_swiper", {
        slidesPerView: 3,
        autoplay: true,
        speed: 1000,
        loop: true,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".info_swiper_controller .swiper-button-next",
            prevEl: ".info_swiper_controller .swiper-button-prev",
        },
    });

    // 알려드립니다
    var notice_swiper = new Swiper(".notice_swiper", {
        slidesPerView: 1,
        autoplay: true,
        speed: 2000,
        loop: true,
        loopAdditionalSlides:1,
        effect: "fade",
        disableOnInteraction: false,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return ('0' + number).slice(-2);
            },
            formatFractionTotal: function (number) {
                return ('0' + number).slice(-2);
            },
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + ' <span>―</span> ' + '<span class="' + totalClass + '"></span>';
            }
        },
        navigation: {
            nextEl: ".notice_swiper_controller .swiper-button-next",
            prevEl: ".notice_swiper_controller .swiper-button-prev",
        },
    });

    // 바로가기메뉴
    var quick_swiper = new Swiper(".quick_swiper", {
        slidesPerView: 8,
        speed: 1000,
        loop: true,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".quick_swiper_controller .swiper-button-next",
            prevEl: ".quick_swiper_controller .swiper-button-prev",
        },
    });

    //민원
    var section4_swiper = new Swiper(".section4_swiper", {
        slidesPerView: 5,
        speed: 1000,
        loop: true,
        loopedSlides: 3,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".section4_swiper .swiper-button-next",
            prevEl: ".section4_swiper .swiper-button-prev",
        },
        centeredSlides : true,
    });

    //리포트
    var reportor_swiper = new Swiper(".reportor_swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 1000,
        loop: true,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".reportor_swiper_area .swiper-button-next",
            prevEl: ".reportor_swiper_area .swiper-button-prev",
        }
    });

    //8경
    var palgung_swiper = new Swiper(".palgung_swiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        slidesPerView: 3,
        speed: 1000,
        loop: true,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".palgung_swiper_area .swiper-button-next",
            prevEl: ".palgung_swiper_area .swiper-button-prev",
        },
        on: {
            slideChange : function() {
                $('.palgung_controller .bar').removeClass('bar_ani');
                console.log($('.palgung_controller .bar').offset());
                $('.palgung_controller .bar').addClass('bar_ani');
            },
        }
    });

    //축제
    var fes_swiper = new Swiper(".fes_swiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        slidesPerView: 3,
        speed: 1000,
        loop: true,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".fes_swiper_area .swiper-button-next",
            prevEl: ".fes_swiper_area .swiper-button-prev",
        },
        on: {
            slideChange : function() {
                $('.fes_controller .bar').removeClass('bar_ani');
                console.log($('.fes_controller .bar').offset());
                $('.fes_controller .bar').addClass('bar_ani');
            },
        }
    });

    //푸터픽스
    var footer_right_swiper = new Swiper(".footer_right_swiper", {
        slidesPerView: 6,
        spaceBetween: 11,
        speed: 1000,
        loop: true,
        loopAdditionalSlides:1,
        disableOnInteraction: false,
        navigation: {
            nextEl: ".right_swiper_controller .swiper-button-next",
            prevEl: ".right_swiper_controller .swiper-button-prev",
        },
    });





    // 외국어선택 드롭다운
    $('.language_span').click(function(){
        $('.language_sub').toggle(1, function() {
            $('.language_span').toggleClass('underbar');
        });
    });

    // 헤더
    $('.dep_1').hover(function() {
        $(this).children(".item").toggleClass('gnb_on');
    });

    $(".bunya").hover(function() {
        $(".bunya_detail").css("opacity","1");
        let x = $(this).index();
        $(".bunya_name").removeClass('on');
        $(".bunya_name").eq(x).addClass('on');
    });

    // 공지사항
    $('.notice_cate').click(function() {
        $('.notice_cate').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.notice_cate').click(function() {
        $('.board_content').removeClass('on');
        $(this).next().addClass('on');
    });

    //천안8경,축제 버튼
    $('.pal_fes li').click(function() {
        let x = $(this).index();
        $('.pal_fes li').removeClass('active');
        $(this).addClass('active');
        $('.cheonan_swiper_area').removeClass('on');
        $('.cheonan_swiper_area').eq(x).addClass('on');
    });

    //푸터
    $('.site_select > a').click(function(e) {
        e.preventDefault();
        if($(this).next().hasClass('on')) {
            $(this).next().removeClass('on');
        } else {
            $('.site_tab').removeClass('on');
            $(this).next().addClass('on');
        }
    });

    //고탑
    $('.gotop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

    $(window).scroll(function() {
        //console.log($(window).scrollTop());
        if($(window).scrollTop() <= 2406) {
            $('.under_fix').addClass('fix');
        } else {
            $('.under_fix').removeClass('fix');
        }
    })
});