function initMap() {
const loc ={ lat: 52.520008, lng: 13.404954 };

const map = new google.maps.Map(document.querySelector('iframe'), {
    center: loc,
    zoom: 8
});

const marker = new google.maps.Marker({position: loc,map: map });
}

//Sticky menu background
window.addEventListener('scroll', function(){
if(this.window.scrollY > 150){
    this.document.querySelector('#navbar').style.opacity = 0.9;
}else {
    this.document.querySelector('#navbar').style.opacity = 1
}
});

//Smooth Scrolling
$("#navbar a, .btn").on("click", function(event){
    if(this.hash !==''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800
        );
    }
});