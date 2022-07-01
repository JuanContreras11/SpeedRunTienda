if (screen.width < 1000) {
    var header = document.querySelector('header');
    header.classList.toggle('sticky',);
    document.getElementById('logo_id').remove();
    document.getElementById('carouselExampleIndicators').remove();
} else
    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        header.classList.toggle('sticky', true);
    });