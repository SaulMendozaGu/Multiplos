import { Injectable } from '@angular/core';
import { Datos } from '../Interface/datos';
import { HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  constructor( private httpClient: HttpClient) { }

  guardarEmpleados(dato: Datos){
    this.httpClient.post('https://bdnumeros-default-rtdb.firebaseio.com/datos.json',dato).subscribe(
      response=>{
        console.log("Se inserto correctamente");
        Swal.fire({//alerta
          icon: 'success',
          title: 'Se inserto en la base de datos',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error =>{
        console.log("Ha ocurrido un error");
      }
    );

  }
}

