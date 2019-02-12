import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
             id: "",
             name:"",
             tel:"",
             permision:""
        }
        
    }
    
    isChange = (event)  => {
         const name = event.target.name;
         const value = event.target.value;
         this.setState({
              [name]:value
         });
    }
     kiemtra = () => {
          if(this.props.hienthiform === true) {
               return(
               <div className="col">  
               <form>
               <div className="card border-primary mb-3" style={{maxWidth: '18rem'}}>
                        <div className="card-header"> Thêm mới User vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" id="nameuser" aria-describedby="helpId" placeholder="nhập Name" onChange={(event) => this.isChange(event)} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="phone" id="phone" aria-describedby="helpId" placeholder="Nhập phone" onChange={(event) => this.isChange(event)} />
                                </div>
                                <div className="form-group">
                                    <select className="form-control" name="permision" id="phanquyen" onChange={(event) => this.isChange(event)}>
                                    <option> member</option>
                                    <option> admin </option>
                                    <option> editor </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input  type="reset" className="btn btn-primary themmoi btn-block" onClick={(name) => this.props.addnew(this.state.name,this.state.phone,this.state.permision)} value="Thêm mới"/>
                                </div>
                        </div>
                </div>
                </form>
                </div>
               )
          }
     }
    render() {
      
        return (
            <div>

                  {
                      this.kiemtra()
                  }
            </div>
          
        );
    }
}

export default Add;