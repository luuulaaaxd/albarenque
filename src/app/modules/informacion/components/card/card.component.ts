import { Component } from '@angular/core';
import{Card} from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public info: Card[];

  constructor(){
    this.info =[
      {
        idCard:"1",
        titulo:"mandarina",
        descripcion:"Son naranjas y de Otoño",
        imagen:"https://cocalni.com/wp-content/uploads/2023/12/c0bc01971ce245badf2ecb80e44210ba806ed1b937d5fa2f0e728feb0f16d4b6c3ee2b34a509a0fa545b44ad0a2fddd7923613dd28f026210d71cd_1280-768x514.jpg",
        alt:"Foto de mandarinas"
      },
      {
        idCard:"2",
        titulo:"manzana",
        descripcion:"Pueden ser rojas o verdes",
        imagen:"",
        alt:"Foto de una manzana",
      },
      {
        idCard:"3",
        titulo:"Melón",
        descripcion:"Es de verano",
        imagen:"",
        alt:"Foto de un melón",
      }

    ]
    
  }

}
