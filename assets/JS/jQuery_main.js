$(document).ready(function () {

    $(".header ul li a").hover(function () {
        $(".header ul li a").removeClass("navActive");
        $(this).addClass("navActive");
    });

    $(".protfolio li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    var list =$(".header nav ul");

    $(".toggle-menu").click(function(e){
        list.toggleClass("hidden");
        e.stopPropagation();    // تمنع انتشار الحدث إلى العناصر الأخرى
    });
    
    $("body").click(function(){
        list.removeClass("hidden");
    });
    
    list.on({
        click: function (e) {
            e.stopPropagation();   // تمنع انتشار الحدث إلى العناصر الأخرى
        },
    });








    $(window).scroll(function(){
        var sc =$(window).scrollTop();
        // console.log(sc);

       
    });





});