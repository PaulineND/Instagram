$('#btn_sabonner, #sabonner2').on('click', function (e) {
    
   $(this).toggleClass("sabonner");
   if ($(this).hasClass("sabonner")) {
   	 $(this).html("abonné(e)");
   }
   else $(this).html("s'abonner");

});