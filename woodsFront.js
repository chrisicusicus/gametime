$(".appendbtn").click(function () {
    var template = $('#appendTemplate").html();
    $(".appendme").append(template);
});