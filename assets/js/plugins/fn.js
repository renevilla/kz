
/* click and load content
* ======================================================================== */
function displayContent() {
$('.row.nav li a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    var cls = $(this).prop('class');
    $('#' + cls).fadeIn(700).siblings('div').hide();
    $('.content-overlay').show();
    $('.row.nav li a').removeClass('active');
    $(this).addClass('active');
});

$('html').click(function () {
    $('.row.nav li a').removeClass('active');
    $("#bio, #stylist, #contact, .content-overlay").fadeOut();
});
}

/* click and load video
* ======================================================================== */

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

function showVideo() {
   $("#movie_list a").click(function(e) {
    $('#kz-video').fadeIn(800);
    $('#video_overlay').fadeIn(800);
    $('.close').fadeIn(800);
    e.preventDefault();
  });
}
function videoLoad() {

 $("a#bww_hb").click(function(e) {
  e.preventDefault();
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

function videoLoad1() {

 $("a#bww_w").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('bww_w.html');
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

//start here
function videoLoad2() {

 $("a#cars_hb").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('cars_hb.html');
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

function videoLoad3() {

 $("a#cars_ld").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('cars_ld.html');
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

function videoLoad4() {

 $("a#cars_smp").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('cars_smp.html');
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

function videoLoad6() {

 $("a#cars_p").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('cars_p.html');
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

// second set of five
function videoLoad7() {

 $("a#kmt_bas").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('kmt_bas.html');
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

function videoLoad8() {

 $("a#kmt_ym").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('kmt_ym.html');
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

function videoLoad9() {

 $("a#kmt_t").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('kmt_t.html');
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

function videoLoad10() {

 $("a#tac_h").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('tac_h.html');
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

function videoLoad11() {

 $("a#tac_twm").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('tac_twm.html');
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

// third set of five
function videoLoad12() {

 $("a#tac_fk").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('tac_fk.html');
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


function videoLoad13() {

 $("a#og_f").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('og_f.html');
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


function videoLoad14() {

 $("a#og_b").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('og_b.html');
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


function videoLoad15() {

 $("a#vi_s").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('vi_s.html');
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


function videoLoad16() {

 $("a#p1i_po").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('p1i_po.html');
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

// fourth set of five
function videoLoad17() {

 $("a#p1i_r").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('p1i_r.html');
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


function videoLoad18() {

 $("a#p1i_p").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('p1i_p.html');
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


function videoLoad19() {

 $("a#cc_pc").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('cc_pc.html');
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

// last set of five
function videoLoad20() {

 $("a#cc_t").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('cc_t.html');
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

function videoLoad21() {

 $("a#ept_a").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('ept_a.html');
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

function videoLoad22() {

 $("a#ept_e").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('ept_e.html');
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

function videoLoad23() {

 $("a#hor_r").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('hor_r.html');
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

function videoLoad24() {

 $("a#hor_t").click(function(e) {
  e.preventDefault();
    $('#kz-video').load('hor_t.html');
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