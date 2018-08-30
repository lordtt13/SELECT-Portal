var navbarExpanded=false;
$(document).ready(function(){
    navbarExpanded=false;
    if(window.innerWidth>1024){
        $('#items1').show();
    }
    else{
        $('#items1').hide();
    }
    $(window).resize(function(){
        if(window.innerWidth>1024){
            $('#items1').show();
            navbarExpanded=false;
        }
        else{
            if(!navbarExpanded)
            {$('#items1').hide();
                $('.nav-icon').removeClass('icon-change')
            }
        }
    });

    $('.nav-icon, .navbar-selected').click(function() {
        $('.nav-icon').toggleClass('icon-change');
        $('#items1').slideToggle();
        navbarExpanded=!navbarExpanded;
        if(navbarExpanded)
            window.setTimeout($('.navbar-selected').css('opacity', '0'),10000);
        else
            $('.navbar-selected').css('opacity', '1');

    });
});