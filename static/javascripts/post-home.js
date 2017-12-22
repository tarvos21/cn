$(document).ready(function() {

  // change style and add arrow icon when hovered 
  $('.centered.column > .ui.raised.segment')
    .hover(
      function() {
        $(this).addClass('bigger');
      },
      function() {
        $(this).removeClass('bigger');
      }
    );

  // load the blog page when the entire segment is clicked 
  $('.centered.column > .ui.raised.segment')
    .click(
      function() {
        window.location = $(this).find("h1.ui.header a").attr("href");
        return false;
      });

});
