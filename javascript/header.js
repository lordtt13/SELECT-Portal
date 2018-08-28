var navbarExpanded=false;
$(document).ready(function(){
navbarExpanded=false;
    if(window.innerWidth>1024){
        $('#items').show();
    }
    else{
        $('#items').hide();
    }
    $(window).resize(function(){
     if(window.innerWidth>1024){
        $('#items').show();
        navbarExpanded=false; 
    }
    else{
        if(!navbarExpanded)
        {$('#items').hide();
         $('.nav-icon').removeClass('icon-change')
        }
    }   
    });
    
    $('.nav-icon, .navbar-selected').click(function() {
        $('.nav-icon').toggleClass('icon-change');
        $('#items').slideToggle();
        navbarExpanded=!navbarExpanded;
        if(navbarExpanded)
            window.setTimeout($('.navbar-selected').css('opacity', '0'),10000);
        else
            $('.navbar-selected').css('opacity', '1');
        
    });
});