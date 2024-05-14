import React from "react";
import './Pagina2.css';
//en caso de que, cuando se cargue un componente se quieran mostrar datos, digamos que, queremos mostrar aqui el nombre de usuario que viene de otro componente, se generan
//cosas llamadas props, para los props en typescript hay que generar una clase llamada props con todos los campos que requiere este componente
interface props{
    campo1:string,
    campo2:string,
    campo3:string
    // etc
}
//si este HTML va a recibir datos de fuera, debemos de pasarselo por los parentesis como parametros
function Pagina2({campo1, campo2, campo3}:props){//aqui le decimos que va a recibir 3 datos llamados campo1, campo2 y campo3 tipo string en formato "props" que es la clase
    //ahora aqui podemos manipular el string que recibimos
    return(
        //asi como en "Navbar" podemos manipular como queramos estos campo1,campo2 y campo3, igualmente podemos imprimirlos como texto o usarlos dentro de funciones
        <div>mostrar {campo1} mostrar {campo2} mostrar {campo3} </div>
    );

}
export default Pagina2;