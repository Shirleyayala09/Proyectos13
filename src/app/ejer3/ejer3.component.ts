import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  fecha ='';
  fa!:Date;
  tiempo='';

  calcular():void{
    if(!this.fecha){
      this.fecha =new Date().toLocaleDateString();
    }
    this.fa=new Date();
    let fecha2= new Date(this.fecha).getTime();
    let numero= this.fa.getTime()- fecha2;

    //dias
    if(numero >= 86400000) {
      let dias  = Math.floor(numero / 86400000);
      this.tiempo = `Hace ${dias} dias.`
    }else if(3600000 <=numero) {
      let hrs = Math.floor(numero / 3600000);
      this.tiempo = `Hace ${hrs} horas.`
    }else if(60000 <= numero) {
      let min  = Math.floor(numero / 60000);
      this.tiempo = `Hace ${min} minutos.`
    }else {
      let sec  = Math.floor(numero / 1000);
      this.tiempo = `Hace ${sec} segundos.`
    }
}
}
