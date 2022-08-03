import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Datos } from 'src/assets/Interface/datos';
import { GuardarService } from 'src/assets/Services/guardar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valorNumero!:  FormGroup;//formulario
  resultado   :  string = "";
  valorUsuario!: number;

  //Variables para confirmar si es multiplo de algun numero valido
  multiplo3:boolean = false;
  multiplo5:boolean = false;
  multiplo7:boolean = false;
  DatosABd!:Datos;
  
  constructor(private fb: FormBuilder,
              private insertar: GuardarService){}
  ngOnInit(){
    //asignamos campos de nuestro formulario
    this.valorNumero = this.fb.group({
      numero: ["",Validators.required]
    })
  }
  multiplos(){
    if(this.valorNumero.value.numero != ""){//si el formulario es valido
     
      //obtener valor ingresado por el usuario
      this.valorUsuario = this.valorNumero.value.numero;

      //Resetear variable del resultado
      this.resultado ="[ ";
      this.multiplo3 = false;
      this.multiplo5 = false;
      this.multiplo7 = false;
  
      //Condiciones para saber si es multiplo de 3, 5 o 7
      if(this.valorUsuario%3 == 0)
      {
        this.resultado = this.resultado+ "3 ";
        this.multiplo3 = true;
      }
      if(this.valorUsuario%5 == 0)
      {
        this.resultado = this.resultado + "5 ";
        this.multiplo5 = true;
      }
      if(this.valorUsuario%7 == 0)
      {
        this.resultado = this.resultado + "7";
        this.multiplo7 = true;
      }
      this.resultado = this.resultado + " ]";
      this.insertarBd(this.valorUsuario, this.resultado);
    }
    else{
      this.resultado = "Ingrese un numero por favor"
    }
   
  }

  //funcion para insertar datos
  insertarBd(numero: number, resultado:string){
    this.DatosABd = {numero: numero,resultado: resultado}
    this.insertar.guardarEmpleados(this.DatosABd);
  }


}
