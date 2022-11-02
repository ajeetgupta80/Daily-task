import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plan from './components/Plan'
import { Component } from 'react';

class App extends Component{

  state = {
    items:[],
    text: ""
  }
  handlechange = e =>
  {
    this.setState({text: e.target.value})
  }
  handleadd = e =>{
    if(this.state.text !== "")
    {
      const items = [...this.state.items , this.state.text];
      this.setState({items:items , text:""});

    }
  }
  handledelete = e =>{
    console.log("deleted");
  }
  
  render()
  {
    return(
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-black shadow-lg p-3">
            <h1 className="text-center "> DAILY TASK </h1>
            <div className="row">
              <div className="col-9">
                <input type="text" className='form-control' placeholder='write your task ' value={this.state.text}  onChange={this.handlechange} />
              </div>
              <div className="col-2">
                <button className='btn btn-warning px-5 font-weight-bold ' onClick={this.handleadd}> Add </button>
              </div>
              <div className="container-fluid">
                 <ul className="list-unstyled row m-5">
                 {
                  this.state.items.map((value,i)=>
                  {
                    return <Plan key={i} id={i} value ={value} sendData={this.handledelete}/>
                  })
                 }
                 </ul>
              </div>

            </div>

          </div>
        </div>   
      </div>
    )
  }
}

export default App;
