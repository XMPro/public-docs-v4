// XMPro Custom JavaScript for DocFX

export default {
  start: () => {
    // Startup script goes here
    
    // Add click handler to all images
    document.addEventListener('click', function(e) {
      if (e.target.tagName === 'IMG' && !e.target.closest('a')) {
        const imgSrc = e.target.src;
        
        // Calculate the correct base path with scalable pattern
        const pathname = window.location.pathname;
        let basePath = '';
        
        // Check if we're on GitHub Pages with a versioned path (e.g., /public-docs-v4.4/)
        const versionedPathMatch = pathname.match(/^\/public-docs-v\d+\.\d+/);
        if (versionedPathMatch) {
          basePath = versionedPathMatch[0];
        }
        
        // Create the image viewer URL
        const imageViewerPath = basePath + '/docs/assets/images/image-viewer.html';
        const fullUrl = imageViewerPath + '?image=' + encodeURIComponent(imgSrc);
        
        // Open in new tab
        window.open(fullUrl, '_blank');
      }
    });
  },
}