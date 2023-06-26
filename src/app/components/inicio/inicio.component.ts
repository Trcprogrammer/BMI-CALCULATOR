import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  peso:number=60;
  edad:number=15;
  altura:number=150;
  sexo:string=""

  constructor(private router:Router){}

  cambiarAltura(evento:any):void{
    this.altura=evento.target.value


  }


 masculino():void{
  this.sexo="masculino";
  
  }

  femenino():void{

    this.sexo="femenino"

  }

  calcularBMI():void{
const BMI=this.peso / Math.pow(this.altura/100,2)

this.router.navigate(['/resultado',BMI.toFixed(1)])
  }




  

}
