import React, { Component } from 'react';
import TabeleData from './TabeleData';

class Table extends Component {
    deteleClick = (iduser) => {
       this.props.deteleClick(iduser);
    }
    MappingDataUser = () => this.props.dulieu.map((value,key) => (
        <TabeleData deteleClick={(iduser)=>this.deteleClick(iduser)} showtablestt={()=> this.props.show()} eidtusercon={ (user) => this.props.edit(value) } key={key} username={value.name} stt={value.id} phone={value.phone} permision={value.permision}/>
    ))
    render() {
       
        return (
            <div className="col">
            <table className="table table-striped table-inverse table-hover">
              <thead className="thead-inverse">
                <tr>
                  <th> STT </th>
                  <th> Tên </th>
                  <th> Điện thoại </th>
                  <th> Quyền </th>
                  <th> Thao tác</th>
                </tr>
              </thead>
              <tbody>
                  {this.MappingDataUser()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default Table;