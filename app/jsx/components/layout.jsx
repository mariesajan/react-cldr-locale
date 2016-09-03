import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import Result from "./result";
import PropertyList from "./property_list";

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
        <h2>React CLDR Locale Exercise Problem</h2>
        <a className="source-link" href="https://github.com/mariesajan/react-cldr-locale">Source Code</a>
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
  handleChange(property){
    this.setState({property: property});
  }
  render(){
    const { property } = this.state;
    const { data } = this.props;
    let keys;
    if(!data){
      keys = null;
    }else{
      keys = Object.keys(data);
    }
    return (
      <div>
        <label>Select the property: </label>
        <PropertyList data={keys} onChange={this.handleChange.bind(this)} />
        <Result property={property} data={data} />
      </div>
    );
  }
}
