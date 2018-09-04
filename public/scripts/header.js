var navbarExpanded=false;
$(document).ready(function(){
    navbarExpanded=false;
    if(window.innerWidth>=1024){
        $('#items1').show();
    }
    else{
        $('#items1').hide();
    }
    $(window).resize(function(){
        if(window.innerWidth>=1024){
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
    });
});
document.addEventListener('DOMContentLoaded', function() {

  var mn = $('.navbarC'),
  core = $('.content-body').eq(0),
  mns = 'page-header-scrolled',
  bit, hdr;

  $(window).resize(function() {
if(window.innerWidth>=1024){
    bit = 103;
}
      else{
          bit=99;
      }
    hdr = $('.heading-bar').outerHeight();
  })
  .resize().scroll(function() {

    if ($(this).scrollTop() >= hdr) {
      mn.addClass(mns);
      core.css('padding',bit+"px 0 30px 0");
    } else {
      mn.removeClass(mns);
      core.attr('style', 'padding: 60px 0 30px 0;');
    }
  })
  .on('load', function() {

    $(this).scroll();
  });
});