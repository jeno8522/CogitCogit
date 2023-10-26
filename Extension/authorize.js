function parseAccessCode(url) {
    if (url.match(/\?error=(.+)/)) {
        // TODO: 오류 알림을 띄우고 창을 닫아야함
    } else {
      // eslint-disable-next-line
      const accessCode = url.match(/\?code=([\w\/\-]+)/);
      if (accessCode) {
        console.log(accessCode[1]);
        // TODO: 인가코드를 사용해서 백엔드 api/member/github에 get 요청 보내야함
      }
    }
}


/* Check for open pipe */
if (window.location.host === 'github.com') {
    const link = window.location.href;
    chrome.storage.local.get('pipe_cogit', (data) => {
    if (data && data.pipe_cogit) {
        parseAccessCode(link);
        chrome.storage.local.remove("pipe_cogit");
    }
    });
}