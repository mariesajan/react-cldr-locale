import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import Result from "./result";

export class Layout extends React.Component{
  constructor(props){
    super(props);
    this.state = {data: null};
  }
  componentDidMount(){
    $.ajax({
      url: '/json',
      datatype: 'json',
      method: 'GET',
      success: function(jsonData){
        this.setState({data: jsonData});
      }.bind(this)
    });
  }
  render(){
    return(
      <div>
        <h2>React Locale</h2>
        <Content data={this.state.data} />
      </div>
    );
  }
}

export class Content extends React.Component{
  static propTypes={
    data: React.PropTypes.object
  };
  constructor(props){
    super(props);
    this.state= {property: ''};
  }
  handleClick(e){
    let property = document.getElementById('txt_property').value;
    this.setState({property: property});
  }
  render(){
    const { property } = this.state;
    const { data } = this.props;
    let allProps;
    if(!data){
      allProps = "";
    }else{
      allProps = Object.keys(data).toString();
    }
    return (
      <div>
        <div>{allProps}</div>
        <label> Enter the property  : </label>
        <input id="txt_property" />
        <button onClick={this.handleClick.bind(this)}>Find</button>
        <Result property={property} data={data} />
      </div>
    );
  }
}
