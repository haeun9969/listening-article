import React, { Component } from 'react';

const imagestyle = {
    height: "20vh",  
      width: "20vw",
      };

class it extends Component {

    constructor(props){
        super(props);
        this.state = {
          datas: [],
          its: []
        }
      }
    
      componentWillMount() {
        fetch('/it', {
          method: "GET",
          headers:{
            "Content-Type": "application/json;charset=UTF-8",
            'Accept': 'application/json',
            },
          mode:"cors",
        }).then( res => {
          return res.json();
        })
        .then( its => {
          this.setState({its: its});
          console.log( "Network success - it : ", its );
        })
        .catch( error =>
          console.log( "Network Error : ", error )
        );}

    render() {
        return (
          <div className='container'>
          <div className='App'>
            <h1> IT 카테고리 </h1><br/><br/>
              <div class="container input-group mb-1">
                <input class="form-control" id="search-input"></input>
                <button class="input-group-append btn btn-danger" id="search">검색</button>
              </div>
            <table>
              <tbody>
                <tr className='trList'>
                  {
                  this.state.its.map ( it =>
                    <td className='cell' key={it._id}>
                          <div className='inner'>
                            <h3>{it.title}</h3>
                            <img src={it.img} style = {imagestyle}/>
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



export default it;