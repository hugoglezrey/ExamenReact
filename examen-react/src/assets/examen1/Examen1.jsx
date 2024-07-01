import React from 'react'
import { useState } from 'react'

export const Examen1 = () => {
  
    const [contador,setcontador]=useState(0);
    const sumar=()=>{
        setcontador(contador+1);
    }
    const restar=()=>{
        setcontador(contador+1);
    }
    const reset=()=>{
        contador=10;
        setcontador(contador);
    }
  
    return (
    <div>
        <P>El numero a contar es {contador}</P>
        <button onclick="sumar">Sumar + 1</button>
        <button onclick="restar">Sumar - 1</button>

    </div>
  )
}

 