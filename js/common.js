$(function() {
    // 메인 뉴스 탭
    $('.theme_news .tab li').click(function() {
        var tab_id = $(this).attr('data-tab');
        $('.theme_news .tab li').removeClass('current');
        $(this).addClass('current');
        $(".theme_news .contents > div").hide();
        $("#"+tab_id).show();
    })

    // .subject more/close 버튼
    $('.subject .more').click(function() {
        event.preventDefault();
        $('.sub_subject').addClass('show');
        $('.black').addClass('show');
    })

    $('.subject .close').click(function() {
        event.preventDefault();
        event.stopPropagation();
        $('.sub_subject').removeClass('show');
        $('.black').removeClass('show');
    })
})