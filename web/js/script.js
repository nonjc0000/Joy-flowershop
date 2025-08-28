$(function () {
    // 漢堡按鈕
    $(".hamburger").click(function () {
        // 切換選單樣式
        $(this).toggleClass("is-active");

        // 切換選單顯示&隱藏
        $(".navigation").toggleClass("show");
    });

    // 捲動至指定區段
    $(".menu a").click(function () {
        var btn = $(this).attr("href");
        var pos = $(btn).offset();
        $("html,body").animate({ scrollTop: pos.top }, 1000);
    });

    // go top
    $("#goTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#goTop").stop().fadeTo("fast", 1);
        } else {
            $("#goTop").stop().fadeOut("fast");
        }
    });

});

// smoove
// 共用預設值
$('.smoove').smoove({
    offset: '30%' // 離底部多遠載入
});

// 遠近載入
$('.smo-z').smoove({
    moveZ: '-500px'
});

// 透視載入
$('.smo-per').smoove({
    rotateX: '90deg',
    moveZ: '-500px',
});