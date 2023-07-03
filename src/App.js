import {useState} from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal(value){
    const animals = ['bird', 'cow', 'cat', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random() * animals.length)];
}

// function useState(defaultValue){
//     return{
//         yourState: defaultValue,
//         yourSetter: () => {}
//     };
// }
function App(){
    const [animals, setAnimals] = useState([]);

    const renderedAnimals = animals.map((animal, index)=>{
        return <AnimalShow type={animal} key={index}/>
    });

    const handleClick = () => {
       setAnimals([...animals, getRandomAnimal()])
    };

    return <div className = "app">
        <button onClick = {handleClick}
        >
        Add Animal
        </button>
        <div>{renderedAnimals}</div>
    </div>
}


export default App;