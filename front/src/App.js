import React from 'react';
import './App.css';

const imagestyle = {
  height: "20vh",  
    width: "20vw",
    };
    

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      datas: []
    }
  }

  componentWillMount() {
    fetch('/data', {
      method: "GET",
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json',
        },
      mode:"cors",
    }).then( res => {
      return res.json();
    })
    .then( datas => {
      this.setState({datas: datas});
      console.log( "Network success - data : ", datas );
    })
    .catch( error =>
      console.log( "Network Error : ", error )
    );
  }

  render() {
    return (
      <div className='container'>
      <div className='App'>
        <h1> 정치 카테고리 </h1><br/><br/>
        <div class="container input-group mb-1">
        <input class="form-control" id="search-input"></input>
        <button class="input-group-append btn btn-danger" id="search">검색</button>
        </div>
        <table>
           <tbody>
               <tr className='trList'>
                {
                this.state.datas.map ( data =>
                   <td className='cell' key={data._id}>
                       <div className='inner'>
                          <h3>{data.title}</h3>
                          <img src={data.img} style = {imagestyle}/>
                        </div>
               </td>
                )}
            </tr>
         </tbody>
          </table>
      </div>
      </div>

    );
  }
}


export default App;