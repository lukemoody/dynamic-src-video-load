let videos = document.querySelectorAll('.js-video');

    // Loop over all video tags and generate src attribute with correct data
    for (let i = 0; i < videos.length; i++) {

      // Generate video tag on click 
      videos[i].addEventListener('click', function () {

        const dataSrc = 'data-video-src';

        // Create video element and set attributes 
        const element = document.createElement("video");
        element.setAttribute('frameborder', '0');
        element.setAttribute('controls', 'controls');

        // Create source element and set type and src 
        const source = document.createElement("source");
        source.type = "video/mp4";
        source.src = this.getAttribute(dataSrc);

        // Append source element to video element
        element.appendChild(source);

        // Append video element to parent
        this.appendChild(element);

        // Remove cover image
        const coverImg = this.querySelector('.cover-img')
        coverImg.parentNode.removeChild(coverImg);

        // Add active class to element
        this.classList.add('is-playing');

        // Auto play video once loaded
        this.querySelector('video').play();
      });
    }
