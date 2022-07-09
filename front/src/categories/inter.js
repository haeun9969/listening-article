import React, { Component } from 'react';

const imagestyle = {
    height: "20vh",  
      width: "20vw",
      };

class inter extends Component {

  constructor(props){
    super(props);
    this.state = {
      inters: []
    }
  }

  componentWillMount() {
    fetch('/inter', {
      method: "GET",
      headers:{
        "Content-Type": "application/json;charset=UTF-8",
        'Accept': 'application/json',
        },
      mode:"cors",
    }).then( res => {
      return res.json();
    })
    .then( inters => {
      this.setState({inters: inters});
      console.log( "Network success - inter : ", inters );
    })
    .catch( error =>
      console.log( "Network Error : ", error )
    );
  }

  render() {
    return (
      <div className='container'>
      <div className='App'>
        <h1> 연예 카테고리 </h1><br/><br/>
        <div class="container input-group mb-1">
        <input class="form-control" id="search-input"></input>
        <button class="input-group-append btn btn-danger" id="search">검색</button>
        </div>
        <table>
           <tbody>
               <tr className='trList'>
                {
                this.state.inters.map ( inter =>
                   <td className='cell' key={inter._id}>
                       <div className='inner'>
                          <h3>{inter.title}</h3>
                          <img src={inter.img} style = {imagestyle}/>
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



export default inter;