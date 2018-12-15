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
});

$(window).on('scroll', function(){
    if($(window).scrollTop() === 0){
        $('[positionTop]').attr('positionTop', 'true');
    } else {
        $('[positionTop]').attr('positionTop', 'false');
    }
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