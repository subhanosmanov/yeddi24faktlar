import './App.css';
import Header from './components/header/header.jsx';
import Wrapper from './components/wrapper/wrapper.jsx';
import RouterConfig from './config/routerConfig.jsx';
import Footer from './components/footer/footer.jsx';
import Recommended from './components/recommended/recommended.jsx';

function App() {

  return (
    <div className="App">
      <Header />
      <Wrapper>
        <RouterConfig />
      </Wrapper>
      <Recommended />
      <Footer />
    </div>
  );
}

export default App;