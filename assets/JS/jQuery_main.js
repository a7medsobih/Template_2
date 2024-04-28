$(document).ready(function () {

    $(".header ul li a").hover(function () {
        $(".header ul li a").removeClass("navActive");
        $(this).addClass("navActive");
    });

    $("nav li a").click(function (e) {
        e.preventDefault();     // -> بتمنع التصرف الافتراضى
        // console.log('.' + $(this).data('scroll'));

        // scrolling navbar
        $('html ,body').animate({
            scrollTop: $("." + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    $(window).on("scroll", function () {

        var sc = $(window).scrollTop();
        // console.log(sc);
        var buttonUp = $(".buttonUp");
        if (sc >= 634) {

            buttonUp.fadeIn();
        } else {
            buttonUp.fadeOut();

        }

    });

    // scroll to top 
    $(".buttonUp").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    var list = $(".header nav ul");

    $(".toggle-menu").click(function (e) {
        list.toggleClass("hidden");
        e.stopPropagation();    // تمنع انتشار الحدث إلى العناصر الأخرى
    });

    $("body").click(function () {
        list.removeClass("hidden");
    });

    list.on({
        click: function (e) {
            e.stopPropagation();   // تمنع انتشار الحدث إلى العناصر الأخرى
        },
    });

    //slider
    var images = ['04.jpg', '00.jpg','01.jpg','03.jpg','05.jpg','06.jpg']; // اسماء الصور
    var bullets = ['circle1', 'circle2', 'circle3','circle4','circle5','circle6'];  // موضع الصوره

    var currentIndex = bulletsIndex = 1; // الصورة الحالية

    function changeBackground() {
        $('.landing').css('background-image', 'url(assets/images/' + images[currentIndex] + ')');
        $(".bullets i").eq(bulletsIndex).addClass("active").siblings().removeClass("active");
    }

    // تغيير الخلفية إلى الصورة الأولى عند تحميل الصفحة
    changeBackground();

    $('.bullets i').click(function () {
        var clickedIndex = $(this).index();
        currentIndex = clickedIndex;
        bulletsIndex = clickedIndex;
        $('.landing').fadeOut('fast', function () {
            changeBackground();
            $('.landing').fadeIn('fast');
        });

    });

    $('.left').click(function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        bulletsIndex = (bulletsIndex - 1 + bullets.length) % bullets.length;    //تغيير موضع الدائره الزرقاء
        $('.landing').fadeOut('fast', function () {
            changeBackground();
            $('.landing').fadeIn('fast');
        });
    });

    $('.right').click(function () {
        currentIndex = (currentIndex + 1) % images.length;
        bulletsIndex = (bulletsIndex + 1 + bullets.length) % bullets.length;  //تغيير موضع الدائره الزرقاء
        $('.landing').fadeOut('fast', function () {
            changeBackground();
            $('.landing').fadeIn('fast');
        });
    });

    

});
