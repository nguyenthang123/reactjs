import React, { Component } from 'react';

class Edituser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.dulieubang.id,
            name:this.props.dulieubang.name,
            phone:this.props.dulieubang.phone,
            permision:this.props.dulieubang.permision
        }
    }
    GetDatasua = (data) => {
         const name = data.target.name;
         const value = data.target.value;
         this.setState({
              [name]:value
         });
    }
    Savebutton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permision = this.state.permision;
        this.props.GetUserInfo(info);
    }
    render() {
        return (
            <div className="col-12">  
            <form method="post">
                <div className="card text-white bg-danger border-danger mb-3" >
                                    <div className="card-body text-primary">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" id="nameuser" aria-describedby="helpId" defaultValue={this.props.dulieubang.name}  onChange={(event) => this.GetDatasua(event)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="phone" id="phone" aria-describedby="helpId" placeholder="Sửa phone" defaultValue={this.props.dulieubang.phone} onChange={(event) => this.GetDatasua(event)}/>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control" name="permision" id="phanquyen" defaultValue={this.props.dulieubang.permision} onChange={(event) => this.GetDatasua(event)}>
                                        <option value={1}> member</option>
                                        <option value={2}> admin </option>
                                        <option value={3}> editor </option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input  type="button" className="btn btn-warning themmoi btn-block" onClick={(info) => this.Savebutton(info)} value="Update user "/>
                                    </div>
                                </div>
                </div>
             </form>
             </div>
        );
    }
}

export default Edituser;