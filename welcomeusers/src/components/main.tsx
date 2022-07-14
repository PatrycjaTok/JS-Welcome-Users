import React from 'react';
import ShowUsersArr from './showUsers';
import ShowTask from './showTask';
import '../App.css';


class CreateObject {
  name: string;
  birthYear: number;
  salary: number
  // queuedirectionAndFrom: CreateQueueDirectionAndFrom[];
  
  constructor(name: string, birthYear:number|string, salary:number|string){
      this.name= name;
      this.birthYear= Number(birthYear);
      this.salary= Number(salary);
  }; 
}


class Main extends React.Component{
  state={
    nameSt: '',
    birthYearSt:1990,
    salarySt: 0,
    array: [{}],
    content1: '',
    showUsers: false,
    showTask: false
  }

  inputHandler (event:any){
    const nevValue: number|string = event.target.value;
    if(event.target.id==="name"){
      this.setState({nameSt: nevValue});
    }else if(event.target.id==="birthYear"){
      this.setState({birthYearSt: nevValue});
    }else if(event.target.id==="salary"){
      this.setState({salarySt: nevValue});
    }
  }

  addToArray (event:any){
    event.preventDefault();

    if(this.state.nameSt==='' || this.state.nameSt.length<3){
      this.setState({content1:"Wprowadź poprawnie nazwę użytkownika"});
    }else if(this.state.birthYearSt===0 || this.state.birthYearSt<1900){
      this.setState({content1:"Wprowadź poprawnie rok urodzenia"});
    }else if(this.state.birthYearSt%1!==0){
        this.setState({content1:"Rok musi być liczbą całkowitą"});
    }else if(this.state.salarySt===0 || this.state.salarySt<1){
      this.setState({content1:"Wprowadź wynagrodzenie"});
    }else{
      this.setState({content1:""});
      let object: object = new CreateObject(this.state.nameSt, this.state.birthYearSt, this.state.salarySt);
      this.state.array.push(object);
      this.setState({nameSt: ''});
      this.setState({birthYearSt: 1990});
      this.setState({salarySt: 0});
    }

  }

  showUsers (event:any){
    event.preventDefault();
    if(this.state.array.length>1){
      this.setState({showUsers:!this.state.showUsers}) 
      if(this.state.showUsers===false){
        this.state.showTask=false
      }
    }
    
  }

  showTask (event:any){
    event.preventDefault();
    if(this.state.array.length>1){
      this.setState({showTask:!this.state.showTask}) 
    if(this.state.showTask===false){
      this.state.showUsers=false
    }
    }
  }

  render(){

    return(
      <div id='container'>
       <form>
          <p>DANE UŻYTKOWNIKÓW </p>
          <label htmlFor="name">Name </label>
          <input type="text" id="name" value={this.state.nameSt} className='inputs' onChange={this.inputHandler.bind(this)} /><br/>
          <label htmlFor="birthYear">Year of birth </label>
          <input type="number" id="birthYear" value={this.state.birthYearSt} className='inputs width60px' onChange={this.inputHandler.bind(this)} /><br/>
          <label htmlFor="salary">salary </label>
          <input type="number" id="salary" value={this.state.salarySt} className='inputs width60px' onChange={this.inputHandler.bind(this)} />
          <input type="submit" value="potwierdź" id="confirmButton" className='buttons' onClick={this.addToArray.bind(this)}/> 
        </form>
        <div id='boxButtons'>
          <button  id="showUsersBtn" className='buttons' onClick={this.showUsers.bind(this)}> Show Users </button>
          <button  id="showTask" className='buttons' onClick={this.showTask.bind(this)}> START </button>
        </div>
        <div id='boxContent'>
          <div id='content1Div'>{this.state.content1}</div>
          <div>{this.state.showUsers ? <ShowUsersArr arraySend={this.state.array}/> : ''}</div>
          <div>{this.state.showTask ? <ShowTask arraySend={this.state.array}/> : ''}</div>
        </div>
      </div>
    );
  };
}


export default Main;