import React, { FunctionComponent } from 'react';

var currentData = new Date();
let currenYear = currentData.getFullYear()

type typeProps={
  arraySend?: object[];

}

const ShowTask: FunctionComponent<typeProps> = (props:any) =>{
  let array: object[]  = props.arraySend;
  let arrayAnswer:string[]=[""];
  let text:string;
  for (var i=1; i<array.length; i++){
  var age=currenYear-Object(array[i]).birthYear
  if(Object(array[i]).salary>15000){
    text =`Witaj, prezesie!`;
    arrayAnswer.push(text);
  }else if(Object(array[i]).salary<5000){
    text =`${Object(array[i]).name}, szykuj się na podwyżkę!`
    arrayAnswer.push(text);
  }else if(Object(array[i]).birthYear%2===0){
    text =`Witaj, ${Object(array[i]).name}! W tym roku kończysz ${age} lat!`
    arrayAnswer.push(text);
  }else if(Object(array[i]).birthYear%2!==0){
    text =`${Object(array[i]).name}, jesteś zwolniony!`
    arrayAnswer.push(text);
  }
  
  }
  console.log(arrayAnswer);
  return  (<div>{arrayAnswer[1]} <br></br> {arrayAnswer[2]} <br></br> {arrayAnswer[3]} <br></br> {arrayAnswer[4]} <br></br> {arrayAnswer[5]} <br></br> {arrayAnswer[6]} <br></br> {arrayAnswer[7]} <br></br> {arrayAnswer[8]} <br></br> {arrayAnswer[9]} <br></br> {arrayAnswer[10]} </div>);
}

export default ShowTask;