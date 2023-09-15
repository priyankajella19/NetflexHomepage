import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='main'>
     <h1 className="text-danger">Netflex</h1>
     <hr></hr>
     <div className="reg">
     <input type='text' placeholder='Enter the email id'></input>
     <button className='btn btn-primary m-2'>Get Started<span className="bi bi-chevron-right"></span></button>
     </div>
      </div>
  );
}
export default App;
