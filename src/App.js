import { useState } from 'react';
import './App.css';

const App =() => {
  const [bio, setbio] = useState ({
    name : "megha",
    batch: "2025" ,
    branch: "ece",
    collage: "mmmut",

  });

  const [color ,setcolor] =useState ("red");
  const handleupdatebio = () => {
    if (bio.name === "megha") {
      const newbio = {
        name : "udit",
        batch: "2027",
        branch : "cse",
        collage: "iit madras",

      };
      setbio(newbio);
      setcolor("blue");
    } else if (bio.name === "udit") {
      const newbio = {
        name : "megha",
        batch: "2025" ,
        branch: "ece" ,
        collage: "mmmut",
      };
      setbio(newbio);
      setcolor("red");
    }
  };
  return ( 
    <>
      <div style = {{backgroundcolor : color}}>
        <h1> Hello my name is {bio.name} ,and i study in {bio.collage}. my branch is {bio.branch} and my batch is {bio.batch}
        </h1>
        <button onClick = {() => handleupdatebio()} type = "button">
    
        { " "}
        update bio { " "}
        </button>
      </div>
    </>
  );
};
export default App;
