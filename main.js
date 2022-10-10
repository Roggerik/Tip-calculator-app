/*
142.55	total de la cuenta
5	personas
21.3825	se le agrega 15% que es la opcion a elegir
163.9325	nuevo total
4.2765	es el monto de propina por persona
32.7865	nuevo pago por persona que hacen el total de 163.9325 que es el monto actual incluido el 15% de propina
*/

let num1 = document.querySelector('.montoTotal-input');
let btn = document.querySelectorAll('.button');
let btns = document.querySelector('.tip__buttons')
let person = document.querySelector('#numberPerson');
let total = document.querySelector('.totalMonto');
let totalUni = document.querySelector('.totalUni');
let custom = document.querySelector('.custom');
let precioActual;
let porcentaje;
let reset = document.querySelector('.reset');


    btn.forEach(boton=>{
    
        boton.addEventListener('click',()=>{
    
            btn.forEach(boton =>{
                boton.classList.remove('active')
            })
            boton.classList.add('active');
            custom.value = "";
            custom.style.background="hsl(189, 41%, 97%)";
            porcentaje = (boton.value/100)+1;
            precioActual = Math.round((porcentaje* num1.value) * 100)/100;
        })
    })

    custom.addEventListener('change',e=>{

        if (custom.value > 0){
            btn.forEach(boton =>{
                boton.classList.remove('active');
                custom.style.background="rgb(38, 192, 171)"
            })
            porcentaje = (custom.value/100)+1;
            precioActual = Math.round((porcentaje* num1.value) * 100)/100;
    
        }
    })


person.addEventListener('change',montoPorPersona);

function montoPorPersona(){
    
    let mTotal = Math.round((precioActual / Number(person.value))*100)/100 ;
    let propina = Math.round(((precioActual - num1.value)/Number(person.value)) * 100)/100;
    propina = propina.toFixed(2)
    mTotal = mTotal.toFixed(2)
    total.innerHTML = mTotal
    
    totalUni.innerHTML = propina;
}


reset.addEventListener('click',()=>{
    totalUni.innerHTML = "0.00";
    total.innerHTML = "0.00";
    num1.value = "";
    person.value="";
    custom.value="";
    custom.style.background="hsl(189, 41%, 97%)"
})
