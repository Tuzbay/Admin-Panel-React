import './App.css';
import Sidebar from "./Sidebar"
import Maindash from "./Maindash"
import RightSide from './RightSide';

function App() {
  return (
    <div className="app">
      <div className="AppGlass">
        <Sidebar />
        <Maindash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
