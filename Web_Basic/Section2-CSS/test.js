$('.marquee-view .marquee').each(function () {
  // console.log($(this));
  var rows = $(this).children().clone()
  $(this).append(rows)
})
