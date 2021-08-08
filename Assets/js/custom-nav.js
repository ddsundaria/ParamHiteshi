jQuery(document).ready(function($) {
    // Your code here
    $("#editorial").on('click', function() {
        $("#mainiframecontent").attr("src", "editorial-information.html");
    });
    $("#editorial-mobile").on('click', function() {
        $("#mainiframecontent").attr("src", "editorial-information.html");
        $('#content_nav').toggleClass('jl_mobile_nav_open');
        $('.mobile_menu_overlay').toggleClass('mobile_menu_active');
        $('.mobile_nav_class').toggleClass('active_mobile_nav_class');
    });

    $("#member").on('click', function() {
        $("#mainiframecontent").attr("src", "member.html");
    });
    $("#member-mobile").on('click', function() {
        $("#mainiframecontent").attr("src", "member.html");
        $('#content_nav').toggleClass('jl_mobile_nav_open');
        $('.mobile_menu_overlay').toggleClass('mobile_menu_active');
        $('.mobile_nav_class').toggleClass('active_mobile_nav_class');
    });

    $("#edition-jul2021").on('click', function() {
        $("#mainiframecontent").attr("src", "/Assets/2021/July/index.html");
    });
    $("#edition-jul2021-mobile").on('click', function() {
        $("#mainiframecontent").attr("src", "/Assets/2021/July/index.html");
        $('#content_nav').toggleClass('jl_mobile_nav_open');
        $('.mobile_menu_overlay').toggleClass('mobile_menu_active');
        $('.mobile_nav_class').toggleClass('active_mobile_nav_class');
    });
});