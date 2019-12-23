var elements = $('.modal-overlay, .modal');

$('.mobile-check-availability').click(function(){
  elements.addClass('active');
});

$('.close-modal').click(function(){
  elements.removeClass('active');
});


var elementss = $('.modal-overlay-contact, .modal-contact');

$('.mobile-contact-info').click(function(){
  elementss.addClass('active');
});

$('.close-modal-contact').click(function(){
  elementss.removeClass('active');
});
