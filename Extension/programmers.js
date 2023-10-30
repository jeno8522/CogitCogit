const submitButton = document.getElementById('submit-code');
if (submitButton != null) {
  submitButton.addEventListener('click', function () {
    saveCode();
  });
}

function saveCode() {
  const codeLanguage = document.getElementById('tour7').querySelector('button').textContent.trim();
  console.log(codeLanguage);

  const codeMirrorLines = document.querySelectorAll('.CodeMirror-line');

  const linesContent = Array.from(codeMirrorLines).map((line) => line.textContent);

  const contentWithNewlines = linesContent.join('\n');

  console.log(contentWithNewlines);

  let resultModal = document.querySelector('.modal-title');
  if (resultModal) {
    resultModal.textContent = '로딩중';
  }

  const intervalId = setInterval(function () {
    resultModal = document.querySelector('.modal-title').textContent;
    console.log(resultModal);

    if (resultModal && !resultModal.includes('로딩중')) {
      console.log(resultModal);
      clearInterval(intervalId);

      if (resultModal.includes('정답')) {
        const timeElements = document.querySelectorAll('.console-test-group td.result.passed');
        const runTimes = [];

        for (var timeElement of timeElements) {
          var runTime = timeElement.innerText.match(/(\d+\.\d+)ms/);
          if (runTime) {
            runTimes.push(parseFloat(runTime[1]));
          }
        }
        let codeRunningTime = runTimes.reduce((acc, value) => acc + value, 0) / runTimes.length;
        console.log(codeRunningTime);
        const algorithmQuestId = document
          .querySelector('div.main > div.lesson-content')
          .getAttribute('data-lesson-id');

        console.log(algorithmQuestId);
      }
    }
  }, 2000);
}
