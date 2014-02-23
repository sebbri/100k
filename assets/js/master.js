function fullHeight(elClass) {
  var element = $(elClass);

  element.css({
    "height" : $(window).height() + "px"
  });
}

function jumpNext() {
    $("a[href*=#]").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 250);
    });
}

$(function(){
  fullHeight(".full-section");
  jumpNext();
});

$(window).resize(function(){
  fullHeight(".full-section");
});
