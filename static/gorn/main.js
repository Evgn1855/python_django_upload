jQuery(document).ready(function ($) {
    $('.modal').ussModal($('.header .modal_opener'));

    let window_width = $(window).width();

    $('.aside-catalog .h3').each(function (index, el) {
        el = $(el);
        let oldText = el.text();
        el.text('');
        $('<span></span>').text(oldText).appendTo(el);
    });
    var positin_slick_params = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        touchMove: false,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        responsive: [
            {
                breakpoint: 825,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 551,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    $('.position__tab.active .uss_widget_outer_content').slick(positin_slick_params);

    function toggleTab(e) {
        var _this = $(e.target);
        _this.addClass('active').siblings('div').removeClass('active');
        var target = $('.position__content .position__tab-' + _this.attr('tab-id'));
        target.addClass('active').siblings('div').removeClass('active');
        target
            .children('.uss_widget_outer_content')
            .slick(positin_slick_params)
            .parent('div')
            .siblings('div')
            .children('.slick-initialized')
            .slick('unslick');
    }
    $('.position__navs .position__nav').on('click', toggleTab);
    $('.slider .slides').sliderHeight({}).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        touchMove: false,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        fade: true
    });

    $('.photoalbum_slider .uss_widget_outer_content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        touchMove: false,
        //autoplay: true,
        autoplaySpeed: 4500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
        ]
    });
    
    function wrapPositionBlocks() {

        $('.services.block .catalog_menu_item').wrapBlock({
            wrapperClassName: 'info',
            target: 'a, .uss_tree_description, .catalog_order_block'
        });

        $('.uss_shop_blocks_view .uss_eshop_item')
            .wrapBlock({
                target: 'div.uss_shop_buy_one_click,div.uss_compare_by,div.uss_shop_put_wrap',
                wrapperClassName: 'extra-buttons'
            })
            .wrapBlock({
                target: 'div.uss_shop_by:not(.uss_shop_buy_one_click) ~ div:not(.extra-buttons)',
                wrapperClassName: 'extra-other'
            });
        $('.uss_shop_list_view .uss_eshop_item .uss_shop_technical_data')
            .wrapBlock({
                target: 'div.uss_compare_by,div.uss_shop_put_wrap',
                wrapperClassName: 'extra-buttons'
            })
            .wrapBlock({
                target: 'div.uss_shop_by:not(.uss_shop_buy_one_click) ~ div:not(.extra-buttons):not(.uss_shop_buy_one_click)',
                wrapperClassName: 'extra-other'
            });
    }
    wrapPositionBlocks();
    $('.uss_shop_detail .uss_shop_technical_data').wrapBlock({
        target: 'div.uss_compare_by,div.uss_shop_put_wrap',
        wrapperClassName: 'extra-buttons'
    });
    $('.uss_catalog_list_cat .uss_catalog_category').wrapBlock({
        target: '.uss_catalog_img_wrap ~ div:not(.uss_shop_blocks_view)',
        wrapperClassName: 'info'
    });
    $('.uss_shop_list_cat .uss_shop_category')
        .wrapBlock({
            target: '.uss_shop_cat_img_wrap ~ div:not(.uss_shop_blocks_view)',
            wrapperClassName: 'info'
        })
        .wrapBlock({
            target: '.uss_shop_blocks_view',
            wrapperClassName: 'items'
        });
    $('.aside-catalog .h3').on('click', function (e) {
        let className = 'open';
        let target = $(e.currentTarget).parent('div').toggleClass(className);
        $(window).on('resize', function () {
            if (window_width > 1000) {
                target.removeClass(className);
            }
        });
    });
    $('.aside-position-slider .uss_widget_outer_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        touchMove: false,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true
    });
    $('.position-slider .uss_widget_outer_content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        touchMove: false,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true
    });µ
//
    function elementItemCount() {
        setTimeout(function(){
            $('.uss_shop_block_cat, .uss_shop_blocks_view, .uss_catalog_block_cat').removeClass('x2 x3 x4 x5 x6');
            var contentWidth = $('.content').width();
            var item_block_cat_width = $('.uss_shop_block_cat .uss_shop_category').outerWidth();
            var item_blocks_view_width = $('.uss_shop_blocks_view .uss_eshop_item').outerWidth();
            var item_catalog_block_width = $('.uss_catalog_block_cat .uss_catalog_category').outerWidth();
            var item_block_cat_Quantity = Math.floor(contentWidth / item_block_cat_width);
            var item_blocks_view_Quantity = Math.floor(contentWidth / item_blocks_view_width);
            var item_catalog_block_Quantity = Math.floor(contentWidth / item_catalog_block_width);
            $('.uss_shop_block_cat').addClass('x'+item_block_cat_Quantity);
            $('.uss_shop_blocks_view').addClass('x'+item_blocks_view_Quantity);
            $('.uss_catalog_block_cat').addClass('x'+item_catalog_block_Quantity);
        }, 300);
    }
    elementItemCount();
    $(window).on('resize', function() {
        elementItemCount();
    }); 
   
//
    $(document).ajaxSuccess(function (e) {
        elementItemCount();
        wrapPositionBlocks();
    });
    $(window).on('resize DOMContentLoaded', function () {
        window_width = $(window).width();
    });
    moveItem('.header .basket', '.header .center .search', 768, 'after');
    moveItem('.menu', '.adaptive-menu', 768, 'append');

    function showBurgerMenu() {
        $('.adaptive-menu').toggleClass('open');
        $('body').toggleClass('noscroll');
    }

    function hideBurgerMenu() {
        $('.adaptive-menu').removeClass('open');
        $('body').removeClass('noscroll');
    }

    $('.header .burger').on('click', function () {
        showBurgerMenu();
        $(window).on('resize', function () {
            if (window_width > 768) {
                hideBurgerMenu();
            }
        });
    });
    $('.adaptive-menu .close').on('click', function () {
        hideBurgerMenu();
    });
    $('.adaptive-menu').on('click', function (e) {
        if (/adaptive-menu/gim.test($(e.target).attr('class'))) {
            hideBurgerMenu();
        }
    });
    ussClicker('.menu li a', 'clicked');
    ussAnchor('.anchor',700,0);
    $(window).on('DOMContentLoaded resize', function () {
        $('.icons .icon').iconsCalculate();
    });

    $('.aside-banner img')
        .one('load', function () {
            $('.aside-banner').each(function (index, elem) {
                const image = $(elem).find('.image img');
                const info = $(elem).find('.info');
                const height = image[0].clientHeight;
                info.css('min-height', height + 'px');
            });
        })
        .each(function () {
            if (this.complete) {
                $(this).load();
            }
        });

    isMemuSybbed($('.footer-menu ul'));

    $('.uss_eshop_block_item').wrapBlock({
        target: '.uss_eshop_amount_block,.add_to_cart',
        wrapperClassName: 'buy_amount'
    });

    //sameServiceImageSize($('.services.block'))
    samePositionImageSize($('.uss_eshop_block_item'))
});

function isMemuSybbed(menu) {
    if ($(menu).find('.submenu').length != 0) {
        $(menu).addClass('subbed');
    }
}

// function sameServiceImageSize(target) {
//     setTimeout(function () {
//         var maxWidth = 0;

//         target.find('.eshop_menu_image img').each(function (index, elem) {
//             if ($(elem).width() > maxWidth) {
//                 maxWidth = $(elem).width();
//             }
//         });

//         target.find('.eshop_menu_image').width(maxWidth);
//     }, 350);
// }

function samePositionImageSize(target) {
    setTimeout(function () {
        var maxHeight = 0;

        target.find('.img img').each(function (index, elem) {
            if ($(elem).width() > maxHeight) {
                maxHeight = $(elem).height();
            }
        });

        target.find('.img').height(maxHeight);
    }, 350);
}