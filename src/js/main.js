// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Activate Carousel
$("#myCarousel").carousel();

$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
$(".right").click(function(){
    $("#myCarousel").carousel("next");
});