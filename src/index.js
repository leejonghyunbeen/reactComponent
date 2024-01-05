import React from 'react'; 
import ReactDOM from 'react-dom/client';      
import App from './App';
//import 불러오는명칭약자 from '묘듈 및 가져오는 파일 경로'
//import 뒤 약자의 이름 첫 글자는 반드시!! 대문자로 작성해야한다!.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode> {/* StrictMode모드에 묶여있는 url 를 검사한다 */}
    <App />
  </React.StrictMode>
);

/* 
-리엑트는 코딩한다라고 안하고 개발한다라고 함-
리액트가 개발될 땐 리엑트 생성 폴더 "src" 폴더내에서만 개발이 시작되고 종료된다
리액트 개발이 종료된 후 ->index,js의 root.render에 의해서 Reacr.StrictMode 엄격모드 기준  APP js에서 제작한 개발결과가 "public.html" 파일의 #root 로 전달되어 웹이 최종적으로사용자들에게 서비스 된다
*/