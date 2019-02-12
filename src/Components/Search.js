import React, { Component } from 'react';
import Edituser from './Edituser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            temvalue:'',
            userObj: {}
        }
    }
    
    hienthinut = () =>  {
         if(this.props.hienthi === true ){ 
            return (<div className="btn btn-danger" onClick={()=>this.props.ketnoi()}> Đóng lại  </div>)
         } else  {
            return (<div className="btn btn-info" onClick={()=>this.props.ketnoi()}> Thêm mới </div> )
           
         }
    }
    isChange = (event) => { 
         this.setState({
              temvalue:event.target.value
         });
     this.props.connect(this.state.temvalue);
    }
    GetUserInfo = (info) => {
        this.setState({
                userObj:info
             });
             this.props.GetUserInfoApp(info.name);
   }
    isShowEdit  = () => {
        if(this.props.edituserstatus === true) {
             return (
             <Edituser GetUserInfo = {(info) => this.GetUserInfo(info)} dulieubang = {this.props.dulieutable} doitrangthaiver3 = {() => this.props.show()}/>
             )
        }
   }
  
    render() {
        return (
            <div className="col-12">  
                 {this.isShowEdit()}
                   <div className="col-md-12">
                        <div className="form-group w-100">
                            <div className="btn-group w-50">
                            <input type="text" className="form-control form-tk" name="thang" id="thang" aria-describedby="helpId" placeholder="Nhập từ khóa " onChange={(event) =>this.isChange(event)}/>
                            <div className="btn btn-info" onClick={(dl)=>this.props.connect(this.state.temvalue)}> Tìm kiếm </div>
                            </div>
                            <div className="mt-4">
                            { this.hienthinut()}
                            </div>
                        </div>
            </div>
            </div>
        );
    }
}

export default Search;