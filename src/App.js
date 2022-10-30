import './App.css';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import MatchContainer from './components/MatchContainer';
function App() {
  return (
    <div >
      <Provider store={store}>
        <MatchContainer />
      </Provider>

    </div>
  );
}

export default App;
