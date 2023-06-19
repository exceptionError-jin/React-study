import logo from './logo.svg';
import './App.css';
import UseState from './hooks/useState';
import UseRef from './hooks/useRef';
import UseMemo from './hooks/useMemo';
import UseCallback from './hooks/useCallback';
import UseEffect from './hooks/useEffect';

function App() {
  return (
    <>
    <h2>useState</h2>
    <UseState/>
    <hr/>

    <h2>UseRef</h2>
    <UseRef/>
    <hr/>

    <h2>UseMemo</h2>
    <UseMemo/>
    <hr/>

    <h2>UseCallback</h2>
    <UseCallback/>
    <hr/>

    <h2>UseEffect</h2>
    <UseEffect/>
    <hr/>
    </>
  );
}

export default App;
