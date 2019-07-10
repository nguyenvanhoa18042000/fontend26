jQuery(document).ready(function($) {
   $('.content').isotope({
      itemSelector: 'img'
   });
   $('.menu li').click(function(event) {
       var type = $(this).attr('type');
      type = '.'+type;
      $('.content').isotope({
         filter:type
      });
   });
});