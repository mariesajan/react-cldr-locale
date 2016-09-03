import React from "react";
import ReactDOM from "react-dom";

export default class PropertyList extends React.Component{
  static propTypes = {
    data: React.PropTypes.array,
    onChange: React.PropTypes.func.isRequired
  };
  handleChange(event){
    let val = event.target.value;
    if(val.length < 0){
      val = null;
    }
    this.props.onChange(val);
  }
  renderOptions(data){
    if(!data){
      return null;
    }else{
      return data.map((property)=>{
        return (<option value={property} key={property}>{property}</option>)
      });
    }
  }
  render(){
    const { data } = this.props;
    return (
      <select onChange={this.handleChange.bind(this)}>
        <option value="">-Select-</option>
        {this.renderOptions(data)}
      </select>
    );
  }
}
