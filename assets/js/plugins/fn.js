
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


function showVideo() {
   $("a#bww_hb").click(function(e) {
    $('#kz-video').fadeIn(800);
    $('#video_overlay').fadeIn(800);
    e.preventDefault();
  });
}

/* click and load video
* ======================================================================== */
function videoLoad() {

 $("a#bww_hb").click(function(e) {
  e.preventDefault();
    $('#kz-video').fadeIn(800);
    $('.close').fadeIn(800);
    $('#kz-video').load('bww-hb.html');
  });

  //close overlay/hide content
  $('.close').click(function (e) {
    e.stopPropagation();
    $('#kz-video').fadeOut(800);
    $('.close').fadeOut(800);
    $('#video_overlay').fadeOut(800);
  });
}

function playPause() {
window.onload = function() {

  // Video
  var video = document.getElementById("video");

  // Buttons
  var playButton = document.getElementById("play-pause");
  var muteButton = document.getElementById("mute");
  var fullScreenButton = document.getElementById("full-screen");

  // Sliders
  var seekBar = document.getElementById("seek-bar");
  var volumeBar = document.getElementById("volume-bar");


  // Event listener for the play/pause button
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      // Play the video
      video.play();

      // Update the button text to 'Pause'
      playButton.innerHTML = "Pause";
    } else {
      // Pause the video
      video.pause();

      // Update the button text to 'Play'
      playButton.innerHTML = "Play";
    }
  });


  // Event listener for the mute button
  muteButton.addEventListener("click", function() {
    if (video.muted == false) {
      // Mute the video
      video.muted = true;

      // Update the button text
      muteButton.innerHTML = "Unmute";
    } else {
      // Unmute the video
      video.muted = false;

      // Update the button text
      muteButton.innerHTML = "Mute";
    }
  });


  // Event listener for the full-screen button
  fullScreenButton.addEventListener("click", function() {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });


  // Event listener for the seek bar
  seekBar.addEventListener("change", function() {
    // Calculate the new time
    var time = video.duration * (seekBar.value / 100);

    // Update the video time
    video.currentTime = time;
  });

  
  // Update the seek bar as the video plays
  video.addEventListener("timeupdate", function() {
    // Calculate the slider value
    var value = (100 / video.duration) * video.currentTime;

    // Update the slider value
    seekBar.value = value;
  });

  // Pause the video when the seek handle is being dragged
  seekBar.addEventListener("mousedown", function() {
    video.pause();
  });

  // Play the video when the seek handle is dropped
  seekBar.addEventListener("mouseup", function() {
    video.play();
  });

  // Event listener for the volume bar
  volumeBar.addEventListener("change", function() {
    // Update the video volume
    video.volume = volumeBar.value;
  });
}
}
function videoLoad() {

 $("a#bww_hb").click(function(e) {
  e.preventDefault();
    $('#kz-video').fadeIn(800);
    $('.close').fadeIn(800);
    $('#kz-video').load('bww-hb.html');
  });

  //close overlay/hide content
  $('.close').click(function (e) {
    e.stopPropagation();
    $('#kz-player')[0].pause();
    $('#kz-video').hide();
    $('.close').fadeOut(800);
    $('#video_overlay').fadeOut(800);
  });
}


