<<<<<<< HEAD
<<<<<<< HEAD
// url 인가코드 파싱
function parseAccessCode(url) {
  if (url.match(/\?error=(.+)/)) {
    // TODO: 오류 알림을 띄우고 창을 닫아야함
    return null;
  } else {
    // eslint-disable-next-line
    const accessCode = url.match(/\?code=([\w\/\-]+)/);
    if (accessCode) {
      return accessCode[1];
    }
  }
}

// 코깃코깃 서비스 로그인
function requestCogitLogin(code) {
  console.log("parameter", code);

  fetch(`http://localhost:8080/member/github?code=${code}`, {
    method: "GET",
  }).then((response) => {
    // 응답헤어 로큰 익스텐션 로컬스토리지 저장
    console.log(response.headers.get("Authorization"));
    chrome.storage.local.set(
      {
        cogit: {
          Authorization: response.headers.get("Authorization"),
          RefreshToken: response.headers.get("RefreshToken"),
        },
      },
      () => {
        // 저장 되었는지 확인
        chrome.storage.local.get("cogit", (data) => {
          console.log(data);
        });
        window.close();
      }
    );
  });
}

/* Check for open pipe */
if (window.location.host === "github.com") {
  const link = window.location.href;
  chrome.storage.local.get("pipe_cogit", (data) => {
    if (data && data.pipe_cogit) {
      const code = parseAccessCode(link);
      if (code != null) {
        requestCogitLogin(code);
      }

      chrome.storage.local.remove("pipe_cogit");
    }
  });
}
=======
document.addEventListener('DOMContentLoaded', function () {
=======
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

>>>>>>> f571f9b (feat: github 소셜 로그인 인가코드 파싱)

/* Check for open pipe */
if (window.location.host === 'github.com') {
    const link = window.location.href;
    chrome.storage.local.get('pipe_cogit', (data) => {
    if (data && data.pipe_cogit) {
        parseAccessCode(link);
        chrome.storage.local.remove("pipe_cogit");
    }
    });
<<<<<<< HEAD
  }
});
>>>>>>> 28e27d1 (feat: 백준 로그인 url 링크 접속)
=======
}
>>>>>>> f571f9b (feat: github 소셜 로그인 인가코드 파싱)
