function fullHeight(elClass) {
  var element = $(elClass);

  element.css({
    "height" : $(window).height() + "px"
  });
}

$(function(){
  fullHeight(".full-section");
});

$(window).resize(function(){
  fullHeight(".full-section");
});
