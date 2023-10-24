// id가 "code_open_open"인 라디오 버튼 요소를 가져옵니다.
const radio = document.getElementById('code_open_close');

// 라디오 버튼에 클릭 이벤트 핸들러를 추가합니다.
radio.addEventListener('change', function () {
  myFunction();
});

// 라디오 버튼을 클릭했을 때 실행될 함수를 정의합니다.
function myFunction() {
  // CodeMirror-line 클래스를 가지고 있는 모든 요소를 선택합니다.
  const codeMirrorLines = document.querySelectorAll('.CodeMirror-line');

  // 각 요소에 포함된 내용을 추출하여 배열에 저장합니다.
  const linesContent = Array.from(codeMirrorLines).map((line) => line.textContent);

  // 각 내용을 줄바꿈으로 연결합니다.
  const contentWithNewlines = linesContent.join('\n');

  // 결과를 출력하거나 다른 작업을 수행합니다.
  console.log(contentWithNewlines);
}
