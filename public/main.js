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
          window.location.href = 'https://xmpro.github.io/public-docs-v4.5/';
        } else if (version === 'v4') {
          window.location.href = 'https://xmpro.github.io/public-docs-v4.4/';
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
        
        // Determine the base path for the site dynamically
        // This handles both local development and GitHub Pages deployment
        let basePath = '';
        const pathname = window.location.pathname;
        
        // Use regex to match versioned paths like /public-docs-v4.4/, /public-docs-v4.5/, etc.
        const versionedPathMatch = pathname.match(/^\/public-docs-v\d+\.\d+/);
        
        if (versionedPathMatch) {
          // Extract the matched base path (e.g., /public-docs-v4.4)
          basePath = versionedPathMatch[0];
        } else if (pathname.includes('/public-docs-pages/')) {
          // Keep this for backward compatibility if needed
          basePath = '/public-docs-pages';
        } else if (pathname.includes('/public-docs/')) {
          // Handle non-versioned public-docs path
          basePath = '/public-docs';
        }
        // For local development or root deployment, basePath remains empty
        
        // Open the image in the custom viewer
        const viewerUrl = basePath + '/docs/assets/images/image-viewer.html?image=' + encodeURIComponent(imgSrc);
        window.open(viewerUrl, '_blank');
      }
    });
  },
}
