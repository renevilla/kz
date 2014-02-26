
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
    $bio.fadeIn(700);
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
    $stylist.fadeIn(700);
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
    $contact.fadeIn(700);
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


/* click and load video
* ======================================================================== */
function videoLoad() {
$('#bww_hb').click(function(e){
  e.preventDefault();

  $("#video_overlay").show();

      $.getJSON('data.json', function (data) {
        var output = '<ul>';
        $.each(data, function (key, val) {
            output += '<li>' + val.name + '</li>';
        });
        output += '</ul>';
        $('#video_overlay').html(output);     // replace all existing content
    });
});
}

