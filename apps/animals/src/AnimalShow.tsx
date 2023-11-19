import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';
import {useState} from "react";
import './AnimalShow.css';

interface AnimalShowProps {
  type: string;
}

const svgMap: {[index: string]:string} = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
}

export const AnimalShow = ({type}: AnimalShowProps) => {
  const [clicks, setClicks] = useState<number>(0);

  const handleClick = () => {
    setClicks(clicks + 1);
console.log(clicks);

  };

  return (<div className="animal-show" onClick={handleClick}>
    <img className="animal" src={svgMap[type]} alt="" />
    <img className="heart" src={heart} alt="" style={{ width: 10+ 10* clicks}}/>
    </div>);
}
