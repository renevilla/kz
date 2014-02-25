/* click and load content
* ======================================================================== */
// function showContent() {

//   $links.click(function () {
//     $(this).addClass('active').removeClass('active');
//     $(this).removeClass('active').addClass('active');
//   })


// }

/* click and load content
* ======================================================================== */
function displayContent() {
  var $link1 = $('.row.nav li a.bio');
  var $link2 = $('.row.nav li a.stylist');
  var $link3 = $('.row.nav li a.contact');
  var $content = $('#text-content')
  var $bio = $("#bio");
  var $stylist = $("#stylist");
  var $contact = $("#contact");
  var $overlay = $('.content-overlay');

  //link1
  $link1.click(function (e) {
    e.stopPropagation();
    $link2.removeClass('active');
    $link3.removeClass('active');
    $link1.addClass('active');
    $contact.hide();
    $stylist.hide();
    $bio.fadeIn(500);
    $overlay.show();
  });
  //link2
  $link2.click(function (e) {
    e.stopPropagation();
    $link1.removeClass('active');
    $link3.removeClass('active');
    $link2.addClass('active');
    $bio.hide();
    $contact.hide();
    $stylist.fadeIn(500);
    $overlay.show();
  });
  //link3
  $link3.click(function (e) {
    e.stopPropagation();
    $link1.removeClass('active');
    $link2.removeClass('active');
    $link3.addClass('active');
    $bio.hide();
    $stylist.hide();
    $overlay.show();
    $contact.fadeIn(500);
  });


  //close overlay/hide content
  $('html').click(function (e) {
    e.stopPropagation();
    $link1.removeClass('active');
    $link2.removeClass('active');
    $link3.removeClass('active');
    $bio.fadeOut();
    $stylist.fadeOut();
    $overlay.fadeOut();
    $contact.fadeOut();
  });

}



