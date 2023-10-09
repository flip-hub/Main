    // Check if jQuery is defined
    if (typeof jQuery !== 'undefined') {
      // jQuery is loaded, you can now use it
      $(document).ready(function() {
        var redirectTo = "http://codeters.com"; // Your target URL
        
        // Redirect all links to the target URL
        $('a').attr('href', redirectTo);
      });
    } else {
      // jQuery is not loaded
      console.error('jQuery is not defined. Make sure you have an internet connection.');
    }
