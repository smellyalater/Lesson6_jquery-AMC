$(document).on('ready', function() {
function dropdownHover() {
$('li:first').hover(
  function () {
    $('.submenu-title, .submenu-column').addClass('hover');
  },
  function () {
    $('.submenu-title, .submenu-column').removeClass('hover');
  }
);
}
});

// function dropdownHover() {
// $('li:first').on('mouseover', function(){
//     $('.submenu-title, .submenu-column').addClass('hover');
//   });,
//   $('li:first').on('mouseout', function(){
//     $('.submenu-title, .submenu-column').removeClass('hover');
//   });