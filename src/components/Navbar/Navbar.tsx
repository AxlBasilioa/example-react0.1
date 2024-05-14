//como supongo que su proyecto puede que tenga formularios, agreguen esta linea de use client en caso de que un componente requiera interactuar con el usuario
//por ejemplo, formularios, campos de busqueda, inicios de sesion, etc
"use client";
//se importa React, se importa useState en caso de que se tengan funcionalidades internas como botones que interacturen, textos, campos de textos, formularios
import React, { useEffect, useState } from "react";
// este 'Link' es para redirecciones de componentes
import { Link } from 'react-router-dom';
// se importa su CSS custom de Navbar
import './Navbar.css';
// se construye la function Navbar (es el mismo nombre que el archivo, los archivos de los componentes empiezan con mayuscula)
function Navbar(){
    //si el componente tiene funcionalidades, se require generar un "hook" que es el siguiente
    const [hookExample, setHookExample] = useState(/*Aqui se agregar el tipo de dato: 0 numerico, 'a' string, true bool, etc*/);
    //hookExample es una variable, setHookExample es la funcion que cambia el valor de hookExample
    // en lugar de "any, se dice que tipo de valor tiene hookExample, string, number, boolean, char, etc"
    const ejecutarsetHookExample = (valorAGuardar:any)=>{
        setHookExample(valorAGuardar);
        //la funcion "ejecutarsetHookExample" ejecuta "setHookExample" y guarda el parametro de entrada de ejemplo
    };
    const scriptPersonalizado = ()=>{
        //esta variable es un script personalizado, digamos que de ejemplo este script debe de ejecutarse para cerrar sesion
    }
    //para cambios de la pagina, se suele usar algo llamado "useEffect"
    useEffect(()=>{
        scriptPersonalizado();
        // este useEffect esta a la escucha de cambios de la pagina para ejecutarse, digamos que queremos que se ejecute "scriptPersonalziado"
        // unicamente cuando se ejecuta "ejecutarsetHookExample"
    }, [ejecutarsetHookExample]);
    //entonces dentro de estas llaves se agregaran todas las variables que quieres que este escuchando la pagina para cambios automaticamos, en este ejemplo
    //en caso de que se ejecute esa funcion "ejecutarsetHookExample" se va a ejecutar despues "scriptPersonalizado", se pueden generar tantos "useEffect" como requieran
    return(
        // aqui se returna el HTML del componente, en este caso del NavBar
        //para entender como funciona el Link, investiguen que es el react-router-dom porque aqui seria dificil de entender en texto
        <nav className="navbar">
            <Link to="/" className="nav-link">inicio</Link>
            <Link to="/Pagina2" className="nav-link">Pagina2</Link>
            <Link to="/Pagina3" className="nav-link">Pagina3</Link>
        </nav>
        //intenten encapsular todo el HTML en "divs" o "sections" pero no usen directamente las etiquetas "<html>" o <link> o <script> porque no funciona asi aqui
        //para usar scripts aqui, esos los necesitan programar arriba justo antes del return de la linea 17
        //este es un ejemplo del uso de hook en un boton
        //el boton recibe un parametro de onClick, y dentro del onClick va la constante que ejecuta y el valor que seria "valorAGuardar" asignado para ejecutar el hook
        //<button onClick={ejecutarsetHookExample('input de ejemplo')}>presioname</button>
        //para agregar estilos a los elementos de HTML se requiere agregar un atributo especial llamado "className"
        // <div className="css-attribute nav-bar btn btn-success">este div es un ejemplo</div>
        // aqui dentro del className ya irian todos los nombres de clases de bootstrap o los que hayan hecho ustedes dentro de "Navbar.css"
    );
}
//cuando el componente esta construido completamente, solo queda exportarlo
export default Navbar;
//para visualizar este componente, se tiene que agregar al archivo "App.tsx" y se podra visualizar y hacerlo funcional completamente