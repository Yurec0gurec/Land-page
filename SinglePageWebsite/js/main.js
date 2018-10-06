var menu_selector = ".vertical";

function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function () {
        var hash = $(this).attr("href");
        var target = $(hash);
        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $(document).on('click', 'a[href^="#"]', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
        var hash = $(this).attr("href");
        var target = $(hash);
        $("html, body").animate({
            scrollTop: target.offset().top
        }, 1000, function () {
            window.location.hash = hash;
            $(document).on("scroll", onScroll);
        });
    });
});

$(document).ready(function () {


    $("a.dot1").hover(function () {
            $("a.dot1").css('width', '67px');
            $("a.dot1").css('opacity', '0.7');
            $("a.dot1 > span").css('left', "-84px");
            $("a.dot1 > span").css('font-size', "14px");
        },
        function () {
            $("a.dot1").css('width', '');
            $("a.dot1").css('opacity', '0.2');
            $("a.dot1 > span").css('font-size', "14px");
            $("a.dot1 > span").css('left', "-84px");

        });
    $("a.dot2").hover(function () {
            $("a.dot2").css('width', '67px');
            $("a.dot2 > span").css('font-size', "14px");
            $("a.dot2").css('opacity', '0.7');
            $("a.dot2 > span").css('left', "-84px");
        },
        function () {
            $("a.dot2").css('width', '');
            $("a.dot2").css('opacity', '0.2');
            $("a.dot2 > span").css('font-size', "14px");
            $("a.dot2 > span").css('left', "-84px");

        });
    $("a.dot3").hover(function () {
            $("a.dot3").css('width', '67px');
            $("a.dot3").css('opacity', '0.7');
            $("a.dot3 > span").css('font-size', "14px");
            $("a.dot3 > span").css('left', "-84px");
        },
        function () {
            $("a.dot3").css('width', '');
            $("a.dot3").css('opacity', '0.2');
            $("a.dot3 > span").css('font-size', "14px");
            $("a.dot3 > span").css('left', "-84px");

        });
    $("a.dot4").hover(function () {
            $("a.dot4").css('width', '67px');
            $("a.dot4").css('opacity', '0.7');
            $("a.dot4 > span").css('font-size', "14px");
            $("a.dot4 > span").css('left', "-84px");
        },
        function () {
            $("a.dot4").css('width', '');
            $("a.dot4").css('opacity', '0.2');
            $("a.dot4 > span").css('font-size', "14px");
            $("a.dot4 > span").css('left', "-84px");

        });
    $("a.dot5").hover(function () {
            $("a.dot5").css('width', '67px');
            $("a.dot5").css('opacity', '0.7');
            $("a.dot5 > span").css('left', "-84px");
            $("a.dot5 > span").css('font-size', "14px");
        },
        function () {
            $("a.dot5").css('width', '');
            $("a.dot5").css('opacity', '0.2');
            $("a.dot5 > span").css('font-size', "14px");
            $("a.dot5 > span").css('left', "-84px");

        });
});
$(document).ready(function () {
    var animationEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd'

    $("#butdownload").click(function () {
        $(this).addClass("animated rubberBand").one(animationEnd,
            function () {
                $(this).removeClass("animated rubberBand");
            });

    });
    $("#logo").click(function () {
        $(this).addClass("animated flip").one(animationEnd,
            function () {
                $(this).removeClass("animated flip");
            });
    })

});
