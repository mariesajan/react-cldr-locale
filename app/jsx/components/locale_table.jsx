import React from "react";
import ReactDOM from "react-dom";

export class LocaleTable extends React.Component{
  static propTypes= {
    data: React.PropTypes.object
  };
  deDup(data){
    let deDup = {};
    for(let locale in data){
      let key= data[locale], val = locale;
      deDup[key] = deDup[key] || [];
      deDup[key].push(val);
    }
    for(let value in deDup){
      deDup[value] = deDup[value].join(', ');
    }
    return deDup;
  }
  render(){
    let { data }= this.props;
    if(!data){
      return null;
    }else{
      data = this.deDup(data);
    }
    return (
      <table>
        <thead>
          <tr><th>Value</th><th>Locales</th></tr>
        </thead>
        <TableBody data={data} />
      </table>
    );
  }
}

export  class TableBody extends React.Component{
  static propTypes= {
    data: React.PropTypes.object.isRequired
  };
  renderRows(data){
    let rowList = [];
    for(let val in data){
      rowList.push(<Row val={val} locales={data[val]}  key={val} />);
    }
    return rowList;
  }

  render(){
    const { data }= this.props;
    return (
      <tbody>
        {this.renderRows(data)}
      </tbody>
    );
  }
}

export class Row extends React.Component{
  static propTypes= {
    val: React.PropTypes.string.isRequired,
    locales: React.PropTypes.string.isRequired
  };
  render(){
    const { locales, val } = this.props;
    return (
      <tr>
        <td>{val}</td><td>{locales}</td>
      </tr>
    );
  }
}
