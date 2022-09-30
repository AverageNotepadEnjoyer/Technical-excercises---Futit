//Ejercicios React

//Ejercicio 1 
1. What are props in a component?
Select all the options that apply.

● Are the component parameters
● is the state of the component
● It is a mechanism to put data inside the component // <--- Esta es la respuesta.

//Ejercicio 2
2. What is a component?
Mark only one option.

● An element
● A function or class that returns an element // <--- Esta es la respuesta.
● An element that returns a function or class
● Other:___________________________

//Ejercicio 3
3. Which of these component types are valid?
Select all the options that apply.

● Complete Component
● Class Component // <--- Válida.
● Component Function // <--- Válida, aunque creo que quisieron decir "Functional component".
● Parent Component
● Child Component

//Ejercicio 4
4. What is the state of a component? //Son las propiedades que tiene el componente, que al contrario de las props pueden ir variando.

//Ejercicio 5
5. What are the component lifecycle methods? //Los ciclos de vida (montaje, actualización y desmontaje) son estados por los que pasan los componentes durante su existencia, y ante esos estados existen diferentes métodos que se pueden implementar para realizar acciones cuando se van produciendo.

//Ejercicio 6
6. How would you set the state of a component? //Se puede cambiar el estado del componente usando setState().

//Ejercicio 7
7. Which of these implementations change the state of a component?
Check only one option.

● this.state.value = "my value"
● this.setState({ value: "my value" })
● this.state = { "value": "my value" }
● Others:_____________________________ // <--- La respuesta es otra. Hay que usar lo siguiente: this.setState({ value : my value })

//Ejercicio 8
8. What happens when we change the state of a component? //Cuando eso se hace, el componente vuelve a renderizar.

//Ejercicio 9
9. Write a component that renders a list of elements, given a prop that
contains an array of objects in the following form: { firstname: "demo",
lastname: "demo", dni: 1234 }

// Podría hacerse de la siguiente manera:

// const Datos = (prop) => {
//     return(
//         <div>
//             <p>prop.firstname</p>
//             <p>prop.lastname</p>
//             <p>prop.dni</p>
//         </div>
//     )
// }

//Ejercicio 10
10. Write a component that receives a prop called "data", and renders an H1
with the content of data.

// function render(data){
//     return(
//         <h1>{data}</h1>
//     );
// }

//Ejercicio 11
11. How do you import Javascript modules installed with NPM or YARN?
Check only one option.

● import name from 'node_modules/name';
● import name from '../../node_modules/name/name.js'
● import name from '../../node_modules/name/index.js'
● import name from 'name';
● Others:____________________________________ // <--- La respuesta es otra. Se importa desde: './name.js'

//Ejercicio 12
12. How do I import the following component, considering that it is inside a file
in the same directory, called MyComponent.js?
Mark only one option.

● import MyComponent from './MyComponent'; // <--- Esta es la respuesta.
● import { MyComponent } from 'MyComponent';
● import MyComponent from 'MyComponent.js';
● import { MyComponent } from './MyComponent.js';
● Others:__________________________________________ 

//Ejercicio 13
13. What is the error in the following component? //El error es que no devuelve nada.

//Ejercicio 14
14. Explain, in your own words, what this component does. //Lo que hace el componente es crear un botón que, al oprimirlo, aumenta en 1 el state.

//Ejercicio 15
15. What errors do you see in the following component? //A setState le falta cerrar con llaves.

//Ejercicio 16
16. How would you make a Rest API call from JavaScript? //Personalmente no poseo experiencia en el tema. Actualmente me encuentro realizando un curso de Desarrollo Web y hasta donde tengo entendido (puedo estar equivocándome) más adelante se ve cómo hacerlo con AJAX, pero de momento no tengo los conocimientos.

//Ejercicio 17
17. What is the use of the useEffect hook? //useEffect hook te permite realizar efectos secundarios en los componentes, como la obtención de datos, actualizar directamente el DOM y/o temporizadores.

//Ejercicio 18
18. How would you develop a custom hook that exposes methods to save and
modify a counter? The hook must have a parameter that allows the
developer to specify how much the counter should add for each call to the 
setter.

//Desconozco cómo realizar este ejercicio, por lo que apreciaría mucho que se me diera la respuesta =)