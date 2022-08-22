import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'password';
  password:string= "";
  length=0;

  includeLetters:boolean= false;
  includeNumbers:boolean= false;
  includeSembols:boolean=false;
   

  modifyLength(value:string){

    const parseValue=parseInt(value);

    this.length=parseValue;
}

modifyLetters(){

  this.includeLetters= !this.includeLetters;
  
}

modifyNumbers(){

  this.includeNumbers= !this.includeNumbers;
  
}
modifySembols(){

  this.includeSembols= !this.includeSembols;
  
}


buttonClick(){

  const numbers :string= '1234567890';
  const letters:string='abcdefghijklmnoprstuvyzqw';
  const symbols:string = '#$%@^&*()!';

  let validChars="";

  if(this.includeLetters){
    validChars +=letters;
  }

  if(this.includeNumbers){
    validChars +=numbers;
  }
  if(this.includeSembols){
    validChars +=symbols;
  }

  let generatedPassword:string= "";

  
  for(let i=0; i<this.length; i++){

   

    let  index= Math.floor(Math.random()*validChars.length);
    generatedPassword += validChars[index];
    


  }
  this.password = generatedPassword;
  
  
}


}
