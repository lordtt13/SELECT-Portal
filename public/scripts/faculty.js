var eeeExpanded=false;
    var eieExpanded=false;
    var epeExpanded=false;
    var caeExpanded=false;

function electricalExpand(){
        eeeExpanded=true;
        $('#eeeCards').slideDown(900);
        setTimeout(function(){
            $('#deeerow .plus-icon').addClass('plus-icon-change');
        },100);
    if(eieExpanded)
        instrumentCollapse();
    if(epeExpanded)
        powerelecCollapse();
    if(caeExpanded)
        automationCollapse();
}
function instrumentExpand(){
        eieExpanded=!eieExpanded;
        $('#eieCards').slideDown(900);
        setTimeout(function(){
            $('#deierow .plus-icon').addClass('plus-icon-change');
        },100);
    if(epeExpanded)
        powerelecCollapse();
    if(caeExpanded)
        automationCollapse();
     if(eeeExpanded)
        electricalCollapse();
}
function powerelecExpand(){
        epeExpanded=true;
        $('#epeCards').slideDown(900);
        setTimeout(function(){
            $('#deperow .plus-icon').addClass('plus-icon-change');
        },100);
    if(eieExpanded)
        instrumentCollapse();
    if(caeExpanded)
        automationCollapse();
     if(eeeExpanded)
        electricalCollapse();
}
function automationExpand(){
        caeExpanded=true;
        $('#caeCards').slideDown(900);
        setTimeout(function(){
            $('#dcaerow .plus-icon').addClass('plus-icon-change');
        },100);
    if(eieExpanded)
        instrumentCollapse();
    if(epeExpanded)
        powerelecCollapse();
    if(eeeExpanded)
        electricalCollapse();
}


function electricalCollapse(){
        eeeExpanded=false;
        $('#eeeCards').slideUp(200);
        setTimeout(function(){
            $('#deeerow .plus-icon').removeClass('plus-icon-change');
        },100);
}
function instrumentCollapse(){
        eieExpanded=false;
        $('#eieCards').slideUp(200);
        setTimeout(function(){
            $('#deierow .plus-icon').removeClass('plus-icon-change');
        },100);
}
function powerelecCollapse(){
        epeExpanded=false;
        $('#epeCards').slideUp(200);
        setTimeout(function(){
            $('#deperow .plus-icon').removeClass('plus-icon-change');
        },100);
}
function automationCollapse(){
        caeExpanded=false;
        $('#caeCards').slideUp(200);
        setTimeout(function(){
            $('#dcaerow .plus-icon').removeClass('plus-icon-change');
        },100);
}

$(document).ready(function(){
   
    $('.navbar-nav .active').removeClass('active');
    $('#nav-faculty').addClass('active');
    $('#deeerow').click(function(){
        if(eeeExpanded){
            electricalCollapse();
        }
        else{
            electricalExpand();
        }
    });
    $('#deierow').click(function(){
        if(eieExpanded){
            instrumentCollapse();
        }
        else{
            instrumentExpand();
        }
    });
    $('#deperow').click(function(){
        if(epeExpanded){
            powerelecCollapse();
        }
        else{
            powerelecExpand();
        }
    });
    $('#dcaerow').click(function(){
        if(caeExpanded){
            automationCollapse();
        }
        else{
            automationExpand();
        }
    });
});
