
$(document).ready(function(){

$('.s-img').parallax({
  imageSrc: 'https://images.unsplash.com/photo-1437419764061-2473afe69fc2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=76fba3bdb1e04cb26a02000be2fe7740'
});
// wow
new WOW().init();
// local
$('html, body').localScroll({
  duration: 800
});

});
