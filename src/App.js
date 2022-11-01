import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';

class App extends Component{
  render()
  {
    return(
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-black shadow-lg p-2">
            <h1 className="text-center "> Daily task </h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='write your task ' />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 font-weight-bold '> Add </button>

              </div>
            </div>

          </div>
        </div>   
      </div>
    )
  }
}

export default App;
