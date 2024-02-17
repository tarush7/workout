import React, { createContext, useState } from 'react';
import UseFetch from './useFetch';

// Create the context
export const ValueContext = createContext();

// Create the provider component
export const ValueProvider = ({ children }) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [muscleGroup, setMuscleGroup] = useState('');
    const [difficulty, setDifficulty] = useState('');
    

    
    
    const { loading, error, data, doFetch } = UseFetch();

    const handleNameChange = (newName) => {
       setName(newName);
       doFetch(`http://localhost:1337/api/exercise?name=${newName}&type=${type}&muscle=${muscleGroup}&difficulty=${difficulty}`);
    };
  
    const handleTypeChange = (newType) => {
      setType(newType);
      doFetch(`http://localhost:1337/api/exercise?name=${name}&type=${newType}&muscle=${muscleGroup}&difficulty=${difficulty}`);
    };
  
    const handleDifficultyChange = (newDifficulty) => {
      setDifficulty(newDifficulty);
      doFetch(`http://localhost:1337/api/exercise?name=${name}&type=${type}&muscle=${muscleGroup}&difficulty=${newDifficulty}`);
    };
  
    const handleMuscleGroupChange = (newMuscleGroup) => {
      setMuscleGroup(newMuscleGroup);
      doFetch(`http://localhost:1337/api/exercise?name=${name}&type=${type}&muscle=${newMuscleGroup}&difficulty=${difficulty}`);
    };
  
    return (
      <ValueContext.Provider value={{ type, difficulty, muscleGroup, loading, error, data, handleNameChange, handleTypeChange, handleDifficultyChange, handleMuscleGroupChange }}>
        {children}
      </ValueContext.Provider>
    );
  };
  
  export default ValueProvider;