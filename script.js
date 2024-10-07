function toggleVideo() {
    event.preventdefault();
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');

    if (trailer.classList.contains('active')) {
        video.pause();
    } else {
        video.play();
    }

    trailer.classList.toggle('active');
}


function changeBg(bg, title) {
    
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');

    // Change the banner background
    banner.style.background = `url('./assets/movies/${bg}')`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    // Update active content
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}
function playVideo() {
    const video = document.querySelector('trailer video');
    video.play();
  }
  
  function pauseVideo() {
    const video = document.querySelector('.trailer video');
    video.pause();
  }