$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    /*  监听屏幕大小改变 */
    //获取所有 item 元素
    var items = $(".carousel-inner .item");
    $(window).on("resize", function () {
        /* 1. 获取当前屏幕宽度 */
        var width = $(window).width();
        /* 2. 判断屏幕宽度 */
        if (width >= 768) {
            /* 遍历每个item元素并添加子元素 */
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("largeImg")
                console.log(imgSrc);
                /* 添加非移动端子元素 */
                item.html($("<a href='#' class='pcImg' ></a>").css("background-image", "url('" + imgSrc + "')"));
            });
        } else {
            $(items).each(function (index, value) {
                var item = $(this);
                var imgSrc = item.data("smallImg");
                console.log(imgSrc);
                /* 添加非移动端子元素 */
                item.html($("<a href='#' class='mobileImg'><img class='visible-xs' src='" + imgSrc + "'></a>'"));
            });
        }
    }).trigger("resize");
    /* 添加移动端手指滑动操作 */
    var startX, endX;
    var carousel_inner = $(".carousel-inner")[0];

    /*获取当前轮播图*/
    var carousel = $(".carousel");

    carousel_inner.addEventListener("touchstart", function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend", function (e) {
        endX = e.changedTouches[0].clientX;
        if (endX - startX > 0) {
            /*上一张*/
            carousel.carousel('prev');
        } else if (endX - startX < 0) {
            /*下一张*/
            carousel.carousel('next');
        }
    });
})