import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from './components/Main';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Wrapper from './components/Wrapper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Wrapper>
        <Swtich>
          <Route exact path="/" Component={Main} />
          <Route exact path="/project" Component={Projects} />
          <Route exact path="/contact" Component={Contact} />
        </Swtich>
      </Wrapper>
      </BrowserRouter>
    )
  }
}

export default App;
