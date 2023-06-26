import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi:number;
  resultado:string;
  interpretacion:string;

  constructor(private router: ActivatedRoute){
     this.resultado=""
     this.interpretacion=""
    this.bmi=+router.snapshot.paramMap.get('valor')!;

  }

  ngOnInit():void{
    this.getResultado()
  }


  getResultado(){
    if(this.bmi >= 25){
      this.resultado='Exceso de peso';
      this.interpretacion='Tienes un exceso de peso corporal superior al normal'

    }else if( this.bmi >= 18.5){
      this.resultado="Tu peso corporal esta normal"
      this.interpretacion="Tu peso corporal es el adecuado para una buena estabilidad "


    }else{
      this.resultado="Peso muy bajo"
      this.interpretacion="Tu peso esta muy bajo para tener una buena estabilidad"
    }
  }
}

