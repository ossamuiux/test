(function() {
    toggleGnb();

    function toggleGnb() {
        var el = $('#header .gnb_wrap, body');
        var gnbBg = $('#header .gnb_bg');

        // 메뉴열기
        $('#header .btn_menu').on('click', function() {
            el.addClass('on');
            gnbBg.fadeIn();
        });
        
        // 메뉴닫기
        $('#header .btn_close').on('click', function() {
            el.removeClass('on');
            gnbBg.fadeOut();

            // gnb초기화
            $('#header .gnb>li').removeClass('on');
            setTimeout(function() {
                $('#header .gnb .depth2').slideUp();
            }, 500);
        });

        // gnb배경 클릭시 메뉴닫기
        $('#header .gnb_bg').on('click', function() {
            $('#header .btn_close').trigger('click');
        })
        
        // gnb 아코디언
        $('#header .gnb>li>a').on('click', function() {
            $(this).parent().toggleClass('on').siblings().removeClass('on');
    
            // 클릭한 a의 부모 li를 열고 다른 형제 li안쪽의 depth2는 닫기
            $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').slideUp();
        });

        // 서브메뉴 모션후 링크
        $('#header .gnb .depth2 a').on('click', function(e) {
            // 원래 링크 막기
            e.preventDefault();
            $(this).addClass('on');

            var url = $(this).attr('href');

            setTimeout(function() {
                // href값으로 강제이동
                location.href = url;
            }, 500);
        });
    }

    // 클릭한 메뉴 모두 열고닫기
    // $('#header .gnb>li>a').on('click', function() {
    //     $(this).toggleClass('on');
    //     $(this).siblings('.depth2').stop().slideToggle();
    // });

    // 메인 슬라이더
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // 메인 탭메뉴 슬라이더
    var menuSlider = new Swiper('.menu_slider', {
        autoHeight: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });

    // 메인 탭메뉴
    $('.main_menu .tab_menu li').on('click', function(e) {
        e.preventDefault();
        var idx = $(this).index();

        $(this).addClass('active').siblings().removeClass('active');

        $('.menu_slider_wrap .menu_slider_blind').eq(idx).addClass('active').siblings().removeClass('active');
    });

    // 서브 lnb
    // 클릭시마다 이전동작 멈추게함
    // $('.lnb .btn_lnb').on('click', function() {
    //     $(this).toggleClass('active');
    //     $('.lnb .list_lnb').stop().slideToggle();
    // });

    
    var flag = true;
    // 클릭시마다 flag를 false시키고 slideToggle후 flag를 true로 변경하여
    // flag가 true일때만 코드실행시킴
    $('.lnb .btn_lnb').on('click', function() {
        if(flag) {
            $(this).toggleClass('active');
            $('.lnb .list_lnb').slideToggle(function() {
                flag = true;
            });
        }
        flag = false;
    });
})();