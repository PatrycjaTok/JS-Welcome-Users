import React, { FunctionComponent } from 'react';
import { JsxAttribute, JsxElement } from 'typescript';

type typeProps={
  arraySend?: object[];

}

const ShowUsersArr: FunctionComponent<typeProps> = (props:any) =>{
  let array: object[]  = props.arraySend;
  let arrayAnswer:String[]=[""];
  let text:string;
  for (var i=1; i<array.length; i++){
  text=`Name: ${Object(array[i]).name}, Year of Birth: ${Object(array[i]).birthYear}, Salary: ${Object(array[i]).salary}zł`;
  arrayAnswer.push(text);
  }
  if(arrayAnswer.length>10){
    console.log(`Program obsługuje do 10 pozycji`);
    return (<div>Program obsługuje do 10 pozycji</div>);
  }else{
    console.log(arrayAnswer);
    return (<div>{arrayAnswer[1]} <br></br> {arrayAnswer[2]} <br></br> {arrayAnswer[3]} <br></br> {arrayAnswer[4]} <br></br> {arrayAnswer[5]} <br></br> {arrayAnswer[6]} <br></br> {arrayAnswer[7]} <br></br> {arrayAnswer[8]} <br></br> {arrayAnswer[9]} <br></br> {arrayAnswer[10]} </div>);
  }
  
}

export default ShowUsersArr;