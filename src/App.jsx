import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function App() {
  const editorRef = useRef();

  const handleSave = () => {
    const editorInstance = editorRef.current.getInstance();
    const markdown = editorInstance.getMarkdown();
    alert(markdown);
  };

  // 🔹 툴바 정의: 기본 버튼 + 저장 버튼
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task", "indent", "outdent"],
    ["table", "image", "link"],
    ["code", "codeblock"],
    [
      {
        name: "save",
        tooltip: "저장",
        // 버튼에 표시할 HTML (텍스트 대신 아이콘/이모지도 가능)
        el: (() => {
          const button = document.createElement("button");
          button.innerHTML = "💾"; 
          button.style.padding = "4px 8px";
          button.style.border = "none";
          button.style.background = "transparent";
          button.style.cursor = "pointer";
          button.onclick = handleSave; // 클릭 시 저장 실행
          return button;
        })(),
      },
    ],
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">TUI Web Editor + React</h1>
        <Editor
          ref={editorRef}
          initialValue="여기에 내용을 작성하세요 ✨"
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          useCommandShortcut={true}
          toolbarItems={toolbarItems} // 🔹 커스텀 툴바 적용
        />
      </div>
    </div>
  );
}

export default App;
