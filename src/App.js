import './App.css';
import Stars from './task_1/Stars';
import Listing from './task_2/Listing';
import data from './task_2/data';


function App() {
  return (
    <div> 
      <div className="task_1">  
        <Stars count={1} />
        <Stars count={2} />
        <Stars count={3} />
        <Stars count={4} />
        <Stars count={5} />
      </div>

      <div className="task_2">
        <Listing items={data} />
      </div>
    </div>
  );
}

export default App;
