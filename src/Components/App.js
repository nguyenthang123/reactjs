import React, { Component } from 'react';
import './../App.css';
import Header from './Header' 
import Search from './Search';
import Hr from './Hr';
import Table from './Table';
import Add from './Add';
import datauser from './../Data.json'
const uuidv1 = require('uuid/v1')   ;
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         hienthiform:false,
         data : [],
         EdituserStt:false,
         keyworld:"",
         EdituserObject:{}
      }
    }
    
    componentWillMount() {
        if(localStorage.getItem('userData') === null ){
            localStorage.setItem('userData',JSON.stringify(datauser));
        } 
        else { 
          var tem =  JSON.parse(localStorage.getItem('userData',datauser));
           this.setState({
               data:tem
           });
        }
    }
    
    
    Edituser = (user)  => {      
      this.setState({
          EdituserObject:user
      });
   }
    GetDatanewUser = (name,phone,permision) => {
        var item = {};
        item.id = uuidv1();
        item.name = name;
        item.phone = phone;
        item.permisiion = permision;
        var items = this.state.data;
        items.push(item);
         this.setState({
            data:items
         }); 
         localStorage.setItem('userData',JSON.stringify(items));
    }
   GetDatasuaform = () => {
       
   }
   deteleClick  = (iduser)  => {
       var temData = this.state.data.filter(item => item.id !== iduser);
        this.setState({
            data:temData
        });
        localStorage.setItem('userData',JSON.stringify(temData));
   }

    doitrangthai = ()  => {
      this.setState({
         hienthiform:!this.state.hienthiform
      })
    }
    GetTextSearch  = (dl)  => {
       this.setState({
          keyworld:dl
       })
    }
    doitrangthaiver2 = () => {
        this.setState({
         EdituserStt:!this.state.EdituserStt
        })
    }
    GetUserInfoApp = (info) => {
        this.state.data.forEach((value,key) => {
              if(value.id === info.id){
                  value.name = info.name;
                  value.phone = info.phone;
                  value.permision = info.permision;
              }
       });
       localStorage.setItem('userData',JSON.stringify(this.state.data));
      }
  render() {
     var ketqua = [];
    this.state.data.forEach((item) => {
       if(item.name.indexOf(this.state.keyworld) !== -1){
          ketqua.push(item);
       }
    })
    return (
      <div className="App">
          <Header/>
          <div className="search_form">
             <div className="container">
                <div className="row">
                     <Search GetUserInfoApp = {(info) => this.GetUserInfoApp(info)} dulieutable={this.state.EdituserObject}  edituserstatus={this.state.EdituserStt} connect= {(dl) => this.GetTextSearch(dl)} ketnoi={() => this.doitrangthai()} hienthi= { this.state.hienthiform} show = {() => this.doitrangthaiver2()} />
                     <Hr/>
                     <Table deteleClick={(iduser) => this.deteleClick(iduser)} dulieu={ketqua} edit={(user) => this.Edituser(user)} show={() => this.doitrangthaiver2()}/>
                     <Add hienthiform = {this.state.hienthiform} addnew={(name,phone,permision) => this.GetDatanewUser(name,phone,permision)}/>
                </div>
             </div>
          </div>
      </div>
    );
  }
}

export default App;
