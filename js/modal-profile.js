$(document).ready(function(){
    
   var $susp = $('#points'),
       $modalProfile =$(".modal-picture"),
       $close = $(".fa-times");
        $modalProfile.hide();
    $susp.click(function(){
        $modalProfile.show();
    });
    $close.click(function(){
        $modalProfile.hide();
    }); 
});

