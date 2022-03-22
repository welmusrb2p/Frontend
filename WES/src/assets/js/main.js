$(function () {
  "use strict";
  $('#smartwizard').smartWizard({
    selected: 1,
    theme: 'arrows', // default, arrows, dots, progress
    // darkMode: true,
    
});
$('#smartwizard2').smartWizard({
  selected: 1,
  theme: 'arrows', // default, arrows, dots, progress
  // darkMode: true,
  
});
})
$(".btn-side-collapsed").click(function(){
  $(".aside-app").toggleClass("aside-app-fullwidth");
  $(".multiple-items-slider").toggleClass("d-none d-flex");
  $(".aside-list-items").toggleClass('d-block d-none');
  $(".horizontal-card-fullwidth").toggleClass("horizontal-card-fullwidth-view");
  $(".d--divider").toggleClass('d-none d-block')
});
// $('.multiple-items').slick({
//   speed: 10000,
//   autoplay: true,
//   autoplaySpeed: 100,
//   cssEase: 'linear',
//   slidesToShow: 1,
//   slidesToScroll: -1,
//   variableWidth: true
// });
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 24.7136, lng: 46.6753 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });

  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 4,
    center: uluru
    
  });
  
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map
  
    
  });
  const marker2 = new google.maps.Marker({
    position: uluru,
    map: map2
    
  });
}