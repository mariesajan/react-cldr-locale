import React from "react";
import ReactDOM from "react-dom";
import { LocaleTable } from "./locale_table";

export default class Result extends React.Component{
  static propTypes={
    data: React.PropTypes.object,
    property: React.PropTypes.string
  };
  render(){
    const { property, data } = this.props;
    if(!data || !property){
      return null;
    }
    const displayData= data[property];
    return (
      <LocaleTable data={displayData} />
    );
  }
}
