// XMPro Custom JavaScript for DocFX

export default {
  start: () => {
    // Startup script goes here
    // console.log("xmpro-template/public/main.js loaded");
    
    // Add the switchVersion function to the global scope
    window.switchVersion = function(version) {
      // Check if we're running locally
      const isLocal = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1' ||
                      window.location.protocol === 'file:';
      
      if (isLocal) {
        // If running locally, navigate to the local version
        // Just stay on the current site for local development
        window.location.href = '/';
      } else {
        // If deployed, navigate to the GitHub Pages URLs
        if (version === 'v5') {
          window.location.href = 'https://xmpro.github.io/public-docs-v5/';
        } else if (version === 'v4') {
          window.location.href = 'https://xmpro.github.io/public-docs-v4/';
        }
      }
    };
    
    // Add click handlers for images to open them with XMPro favicon
    document.addEventListener('click', function(e) {
      // Check if clicked element is an image inside article content
      if (e.target.tagName === 'IMG' && e.target.closest('article')) {
        e.preventDefault();
        
        // Get the image source
        let imgSrc = e.target.src;
        
        // Convert absolute URL to relative path if needed
        if (imgSrc.includes(window.location.origin)) {
          imgSrc = imgSrc.replace(window.location.origin, '');
        }
        
        // Open the image in the custom viewer
        const viewerUrl = '/docs/assets/images/image-viewer.html?img=' + encodeURIComponent(imgSrc);
        window.open(viewerUrl, '_blank');
      }
    });
  },
}
