$(document).ready(function () {
    // Otomatik oynatma aralığı (ms cinsinden)
    var autoPlayInterval = 5000; // Örneğin, 5 saniyede bir otomatik geçiş yapar.

    // Slayt sayısı
    var numSlides = 5; // Slayt sayısına göre güncelleyin

    var currentSlide = 1;

    function goToNextSlide() {
        currentSlide++;
        if (currentSlide > numSlides) {
            currentSlide = 1; // Son slayta geldiğinde başa dön
        }
        $("input[name='slider'][id='trigger" + currentSlide + "']").prop("checked", true);
    }

    // Otomatik oynatma işlevini başlat
    setInterval(goToNextSlide, autoPlayInterval);
});