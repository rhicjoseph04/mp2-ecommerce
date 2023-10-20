let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3;

function loadShow() {
    let stt = 0;
    items[active].style.transform = 'none';
    items[active].style.zIndex = 1;
    items[active].style.filter = 'blur(0)';
    items[active].style.opacity = 1;

    for (let i = 0; i < items.length; i++) {
        if (i !== active) {
            stt++;
            let blurValue = stt > 2 ? 5 : 1 + stt; // Adjust blur based on position
            items[i].style.transform = `translateX(${(i - active) * -120}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${(active - i) * -1}deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = `blur(${blurValue}px)`;
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
}

function nextSlide() {
    active = (active + 1) % items.length;
    loadShow();
}

function prevSlide() {
    active = (active - 1 + items.length) % items.length;
    loadShow();
}

next.onclick = nextSlide;
prev.onclick = prevSlide;


setInterval(nextSlide, 1000);

// Initially show the first slide
loadShow();


 type="text/javascript">
    $(document).ready(function(){
        $('.product-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000, // Set the interval between slides in milliseconds (e.g., 2000ms = 2 seconds)
            dots: true, // Display navigation dots
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });




    function closeModal() {
        var modal = document.getElementById("agvModal");
        modal.style.display = "none";
    }

