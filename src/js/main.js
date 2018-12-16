"use strict";

$(document).ready(function(){
    $('#js_menuBtn').on('click', function(){
        if($('[menuState]').attr('menuState') === 'open') {
            $('[menuState]').attr('menuState', 'close');
        } else {
            $('[menuState]').attr('menuState', 'open');
        }
    });
    $(".js_anchor").click(function() {
        $('[menuState]').attr('menuState', 'close');
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top - 49;
        jQuery("html, body").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    langState('#ru', 'ru');
    langState('#eu', 'eu');
    $('.js_langChange').on('click', function(){
        $('.header__lang').toggleClass('header__lang_show');
        $('.header__arrow').toggleClass('header__arrow_show');
    });
});
$(document).mouseup(function (e) {
    var container = $(".js_langChange");
    if (container.has(e.target).length === 0){
        $('.js_langChange').removeClass('header__lang_show');
        $('.header__arrow').removeClass('header__arrow_show');
    }
});

function langState(lang, langState){
    $(lang).on('click', function(){
        $('.body').attr('lang', langState);
    });
}

function ChangeDots(elem, state){
    var wHeight = $(window).innerHeight(),
        wPosition = $(window).scrollTop(),
        elemPosition = $(elem).offset().top;
    if((wPosition + wHeight) >= elemPosition){
        $('.body').attr('line', state);
    }
}

$(window).on('scroll', function(){
    if($(window).scrollTop() === 0){
        $('[positionTop]').attr('positionTop', 'true');
    } else {
        $('[positionTop]').attr('positionTop', 'false');
    }

    ChangeDots('#topSide', 'top');
    ChangeDots('#first', '1');
    ChangeDots('#second', '2');
    ChangeDots('#third', '3');
    ChangeDots('#fourth', '4');
    ChangeDots('#fifth', '5');
    ChangeDots('#sixth', '6');
    ChangeDots('#bot', 'bot');
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.986821, 30.321258],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'ООО "Регент Балтика"'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/placeholderBig.png'
            // Размеры метки.
            // iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            // iconImageOffset: [55, -22]
        });

    myMap.geoObjects
        .add(myPlacemark)
});