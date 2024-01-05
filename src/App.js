/* import logo from './logo.svg';
import './App.css'; */
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
function App() /* 함수명 컴포넌트(componut) */{
  return  /* 리턴 외부로 반환시켜준다 즉 왔다갔다 쓸수 있게 해준다 */(
    <div className="App"> {/* class x className 0 */} 
      <Header/>
      <h1>hello react!</h1>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Main/>
      <Footer/>
    </div>
  );
}


export default App; 
/* 리엑트는 src 개발환경 내에서 html파일을 생성하지 않고 모두 js파일로 생성되서 개발된다
js는 원칙적으로 자바스크립트 작성파일이기 때문에 리액트에서 HTML을 JS 내에서 표현하려면 function 함수를 먼저 생성하여 작성해야 한다. 함수 내에 HTML을 작성하면 JSX 문법과 함께 자바스크립트와HTML을 사용할 수 있어 효율적이다.

다른 js파일로 작성되어있는 컴포넌트를 불러오려면 해당 컴포넌트 맨 하단에 "export default 컴포넌트명" 으로 내보내는 리액트가 작성되어 있어야한다.
그 후 내보낸 컴포넌트를 받는 js 파일에서 import 명령으로 "import 받는컴포넌트명 from'해당파일경로'" 로 작성해서 컴포넌트를 받아 사용하게 된다.
*/