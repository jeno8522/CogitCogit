import React, { useEffect, useState } from "react";

function CodeViewer( codeContent ) {
  const [codeLine, setCodeLine] = useState([]);
  const [codeActive, setCodeActive] = useState(-1);
  const codeee = 'import java.util.*;\n​\nclass Solution {\n    public int solution(int[][] targets) {\n        int answer = 0;\n        Arrays.sort(targets, (o1, o2) -> {\n            if(o1[0] == o2[0]){\n                return o2[1] - o1[1];\n            }\n            return o1[0] - o2[0];\n        });\n        \n        for(int i = 0; i < targets.length; i++){\n            int end = targets[i][1];\n            \n            while(i < targets.length - 1 && targets[i + 1][0] < end){\n                end = Math.min(end, targets[i + 1][1]);\n                i++;\n            }\n            answer++;\n        }\n        return answer;\n    }\n}';
  
  const toggleActive = (e) => {
    setCodeActive((prev) => {
      return e.target.value;
    });
  }

  useEffect(() => {
    setCodeLine(codeee.toString().split("\n"));
  }, []);

  return (
    <div className="flex flex-col m-4 overflow-auto h-full">
      {codeLine.map((code, idx) => {
        return(
          <button value={idx} className={"text-left  hover:bg-background" + (idx == codeActive ? " bg-hover" : "")} onClick={toggleActive}>{code}</button>
        );
      })}
    </div>
  );
};

export default CodeViewer;