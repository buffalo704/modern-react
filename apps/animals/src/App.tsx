import { useState} from "react";
import {AnimalShow} from "./AnimalShow";
import './App.css';

const getRandomAnimals = () => {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState<string[]>([]);

  const handleClick = () => {

    setAnimals([...animals, getRandomAnimals()]);
  }

  const animalShows = animals?.map((animal, index) => <AnimalShow type={animal} key={index}/>);

  return (<div className="app">
      <button onClick={handleClick}>Add Animals</button>
      <div className="animal-list">{animalShows}</div>
    </div>);
}

export default App;
