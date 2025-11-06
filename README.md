📁 프로젝트 설정 파일
package.json
특징: 프로젝트의 '신분증' 같은 파일입니다.
역할: React, Tailwind CSS 같은 설치된 라이브러리 목록(dependencies)과 npm run dev 같은 실행 명령어(scripts)가 정의되어 있습니다.

src/index.css
역할: @import "tailwindcss"가 Tailwind CSS를 프로젝트에 주입한다.

Vite에서 @tailwindcss/vite 플러그인을 사용하면 PostCSS 설정 파일(postcss.config.js) 없이도 Vite 빌드 파이프라인에서 Tailwind 처리를 해 줍니다. 따라서 프로젝트는 플러그인 방식으로 Tailwind를 통합했고, index.css의 @import "tailwindcss";가 Tailwind 스타일을 실제로 주입합니다.

📁 src (소스 코드) 파일

src/App.tsx (⭐ 가장 중요)
특징:최상위 부모 컴포넌트입니다.
역할:모든 할 일 데이터(todos 배열)를 useState로 직접 소유하고 관리합니다.
할 일을 추가(onAdd), 삭제(onRemove), 토글(onToggle)하는 **모든 핵심 함수(로직)**를 정의합니다.
하위 컴포넌트들(TodoInsert, TodoList)에게 데이터(state)와 함수(logic)를 props로 전달해 줍니다. 

src/components/TodoTemplate.tsx
특징: 앱의 '뼈대'역할을 하는 레이아웃 전용 컴포넌트입니다. 
역할: children props를 받아  그 안에 제목, 입력창, 목록을 담습니다.

src/components/TodoInsert.tsx
특징: '항목 추가' 기능만 전담하는 폼(form) 컴포넌트입니다. 
역할:사용자가 입력하는 텍스트를 자체 useState로 관리합니다. 
'추가' 버튼을 누르면, App.tsx로부터 props로 전달받은 onAdd 함수를 호출하여 "이 텍스트를 추가해달라"고 부모에게 알립니다. 

src/components/TodoList.tsx
특징: **'항목 목록'**을 보여주는 것을 전담하는 리스트(ul) 컴포넌트입니다. 
역할:App.tsx로부터 todos 배열을 props로 전달받습니다. 
todos.map()을 사용해 배열을 순회하며, 각 항목을 TodoItem 컴포넌트로 변환하여 화면에 그립니다. 


src/components/TodoItem.tsx
특징: **'개별 할 일 항목 1개'**를 전담하는 아이템(li) 컴포넌트입니다. 
역할:체크박스, 텍스트, 삭제(X) 버튼을 가지고 있습니다.
todo.done 값(true/false)에 따라 조건부로 Tailwind 클래스를 적용해 취소선(line-through)을 표시합니다.
삭제(X) 버튼을 누르면 props로 받은 onRemove 함수를 호출합니다.