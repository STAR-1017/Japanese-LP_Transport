$(function() {
    var topBtn = $('.gotop');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
$(function() {
    var offsetY = 0;
    var time = 500;
    $('a[href^=#]').click(function() {
        var target = $(this.hash);
        if (!target.length) return;
        var targetY = target.offset().top + offsetY;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
    });
});
$(function() {
    var $setElem = $('.switch'),
        pcName = '_pc',
        spName = '_sp',
        replaceWidth = 767;

    $setElem.each(function() {
        var $this = $(this);

        function imgSize() {
            if (window.innerWidth > replaceWidth) {
                $this.attr('src', $this.attr('src').replace(spName, pcName)).css({ visibility: 'visible' });
            } else {
                $this.attr('src', $this.attr('src').replace(pcName, spName)).css({ visibility: 'visible' });
            }
        }
        $(window).resize(function() { imgSize(); });
        imgSize();
    });
});
$(function() {
    $('.qa ul li .q').click(function() {
        $(this).next('.qa ul li .a').slideToggle();
        $('.qa ul li .q').not($(this)).next('.qa ul li .a').slideUp();
    });
});