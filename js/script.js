$('document').ready(function () {
    
Dropzone.options.dropzone = { // The camelized version of the ID of the form element
    // The configuration we've talked about above
    url: '#',
    previewsContainer: ".dropzone-previews",
    uploadMultiple: true,
    parallelUploads: 100,
    maxFiles: 100
  }

    $('#sign_in').click(function () {
        $('#not_logged').animate({
            right: '-50%',
            display: 'none'
        }, 'slow');

        $('#logged_in').css({
            display: 'block',
            right: '-35%'
        });

        $('#sign_form').animate({
            right: "0%"
        }, 'slow');

    });

    $('#sign_form > button').click(function () {
        $('.logs').animate({
            right: '0%'
        }, 'slow');

        $('#sign_form').animate({
            right: '-35%'
        }, 'slow');

        $('#infos').animate({
            top: '110%'
        }, 'slow');

        $('#send_form').animate({
            top: '18%'
        }, 'slow');
    });

    $('#choice_tab').click(function () {
        $('ul').slideDown('slow');
        if ($('ul').is(':visible')) {
            $('#choice_tab').click(function () {
                $('ul').slideUp('slow');
            });
        } else {
            $('ul').css('display', 'block');
        }
    });
    
    $('ul:last-child').click(function () {
        $('ul').slideUp('slow');

        $('#logged_in').delay(600).animate({
            right: '-50%'
        }, 'slow');

        $('#infos').animate({
            top: '18%'
        }, 'slow');

        $('#send_form').animate({
            top: '-110%'
        }, 'slow');
    });

});
