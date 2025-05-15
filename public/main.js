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
  },
}
