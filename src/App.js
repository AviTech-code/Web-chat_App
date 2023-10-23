
import './App.css';
import LeftBar from './components/leftbarFolder/leftBar';
import RightBar from './components/rightbarFolder/rightbar';
import data from './Data/dummyData.json';
import { Routes, Route } from 'react-router-dom';
function App() {
  console.log(data.conversations);
  return (
    <div className="App">

      <LeftBar data={data.conversations} />
      <RightBar data={data.conversations} />
    </div>
  );
}

export default App;
