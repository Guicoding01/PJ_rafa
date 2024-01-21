    const imageCarousel = document.getElementById('image-carousel'); /* div que esta as img dentro*/
    const imgCarousel = document.getElementById('img-carousel');
    const images = document.querySelectorAll('.carousel-image'); /* div que armazena as img */
    const prevButton = document.querySelector('.carousel-button:nth-child(1)'); /* pegou os botoes pelas posiçoes 1 e 2 */
    const nextButton = document.querySelector('.carousel-button:nth-child(2)'); /* pegou os botoes pelas posiçoes 1 e 2 */
    const prevbtn = document.querySelector('.carousel-btn:nth-child(1)'); /* pegou os botoes pelas posiçoes 1 e 2 */
    const nextbtn = document.querySelector('.carousel-btn:nth-child(2)'); /* pegou os botoes pelas posiçoes 1 e 2 */

    /* index para começar do 0 */
    let currentIndex = 0;

    /* açao do container demonstrativo de treino */ 
    prevButton.addEventListener('click', prevImage); 
    nextButton.addEventListener('click', nextImage);

    /* açao do container metodologias*/
    prevbtn.addEventListener('click', prevImg); 
    nextbtn.addEventListener('click', nextImg);


   /* funçoes do container demonstrativo de treino */ 

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        const newTransformValue = - currentIndex * 27 + '%';
        imageCarousel.style.transform = 'translateX(' + newTransformValue + ')';
    }

    /* açao do container metodologias*/

    function prevImg() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel_2();
    }

    function nextImg() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel_2();
    }

    function updateCarousel_2() {
        const newTransformValue = - currentIndex * 27 + '%';
        imgCarousel.style.transform = 'translateX(' + newTransformValue + ')';
    }
    