import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  entrada:string;
  soma:number = 0;
  saida:string;
  diferenca:number;

  somatoria($event, entrada){
    entrada = Number(entrada)
    console.log(entrada)
        this.soma = Number(this.soma) + entrada;

  //   console.log(this.soma)
    if(this.soma == 45){
      console.log("entrou",this.soma)
   this.saida = "Retire seu refrigerante";
   this.soma = 0;
    }else if(this.soma > 45){
      console.log()
    this.saida = `Você perdeu ${this.soma - 45}`; 
    this.soma = 0;
    }
    this.entrada = ''
  } 
}
