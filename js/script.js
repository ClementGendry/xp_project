$(document).ready(function(){

    $('#sign_in').click(function(){
        $('#not_logged').animate({
            right: '-50%',
            display: 'none'
        }, 'slow' );

        $('#logged_in').css({
          'display': 'block',
          'right': '-35%'
        });

        $('#sign_form').animate({
            right: "0%"
        }, 'slow' );

    });

    $('#sign_form > button').click(function(){
        $('.logs').animate({
            right: '0%'
        }, 'slow' );

        $('#sign_form').animate({
            right: '-35%'
        }, 'slow' );

        $('#infos').animate({
            top: '110%'
        }, 'slow' );

        $('#send_form').animate({
            top: '18%'
        }, 'slow' );
    });

    $('#choice_tab').mouseover(function(){
        $('ul').slideDown('slow');
    });

    $('ul:last-child').click(function(){
        $('ul').slideUp('slow');

        $('#logged_in').delay( 600 ).animate({
            right: '-50%',
        }, 'slow' );

        $('#infos').animate({
            top: '18%'
        }, 'slow' );

        $('#send_form').animate({
            top: '-110%'
        }, 'slow' );
    });

});
