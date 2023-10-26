document.addEventListener('DOMContentLoaded', function () {

/* Check for open pipe */
if (window.location.host === 'github.com') {
    chrome.storage.local.get('pipe_cogit', (data) => {
      if (data && data.pipe_baekjoonhub) {
        localAuth.parseAccessCode(link);
      }
    });
  }
});