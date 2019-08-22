
$(document).ready(function(){

    /* Block settings: color theme */
    $("#white").click(function(){
        $("body").removeClass("grey dark").addClass("white");
        $(".box-setting-switch").removeClass("activeSwitch");
        $(this).addClass("activeSwitch");
    });
    $("#grey").click(function(){
        $("body").removeClass("white dark").toggleClass("grey");
        $(".box-setting-switch").removeClass("activeSwitch");
        $(this).addClass("activeSwitch");
    });
    $("#dark").click(function(){
        $("body").removeClass("grey white").toggleClass("dark");
        $(".box-setting-switch").removeClass("activeSwitch");
        $(this).addClass("activeSwitch");
    });

    /* Block settings: Displayed */
    $(".hideLogo").click(function(){
        $(".logo").toggleClass("hide");
        $("#header-container").toggleClass("flex-end");
    });
    $(".hideNetwork").click(function(){
        $(".footer-network").toggleClass("hide");
    });
    $(".hideTitle").click(function(){
        $(".title .h2").toggleClass("hide");
    });
    $(".hidePostTitle").click(function(){
        $(".gallery-container-content .h4").toggleClass("hide");
    });

    /* Block settings Icon */
    $(".box-icon").click(function() {
        $(".box-setting").toggleClass("show");
    });

    /* Menu */
    $(".burger").click(function() {
        $(this).toggleClass("open");
        $(this).next().slideToggle();
    });
    
});