import React, { Component } from 'react';

class TabeleData extends Component {
    permision = () => {
         if(this.props.permision === 1){
               return "admin";
         }
         else if (this.props.permision === 2) {
                return "Permision";
         }
         else {
               return "Member";
         }
    }
    editClick = () =>  {
        this.props.eidtusercon();
        this.props.showtablestt();
    }
    deteleClick = (iduser) => {
      this.props.deteleClick(iduser);
    }
    render() {
        return (
                <tr>
                    <td>{this.props.stt}</td>
                    <td>{this.props.username}</td>
                    <td>{this.props.phone}</td>
                    <td>

                     { this.permision()}

                    </td>
                    <td> 
                        <div onClick={() =>  this.editClick()} className="btn btn-warning sua">
                        <i className="fa fa-edit"> Sửa </i>
                        </div> 
                        <div onClick= {(iduser) => this.deteleClick(this.props.stt)} className="btn btn-danger xoa">
                        <i className="fa fa-remove"> Xóa </i>
                        </div> 
                    </td>
                </tr>
        );
    }
}

export default TabeleData;