$(function() {
    // 메인 뉴스 탭
    $('.theme_news .tab li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.theme_news .tab li').removeClass('current');
        $(this).addClass('current');
        $(".theme_news .contents > div").hide();
        $("#"+tab_id).show();
    })

    // .subject
    $('.subject .more').click(function() {
        event.preventDefault();
        // $('.wrap:before').css('display','block');
        $('.sub_subject').show();
    })

    $('.subject .close').click(function() {
        event.preventDefault();
        $('.sub_subject').hide();
    })
})