import './App.css';
import Header from './components/Header' // import 한 component를 Header라고 명명하여 사용
import Content from './components/Contents'

function App() {
  return (
    <div className="App">

      <Header /> 
      <Content /> 
    </div>
  );
}

export default App;
