$(document).ready(function(){
    $(".protfolio li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
})