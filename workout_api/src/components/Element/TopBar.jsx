import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"


import { useState } from "react";
import { useEffect } from "react";
import { useContext } from 'react';
import { ValueContext } from "@/ValueContext";


export function MenubarDemo() {

  const { loading, error, data, handleNameChange, handleTypeChange, handleDifficultyChange, handleMuscleGroupChange } = useContext(ValueContext);

  const [name, setName] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');

  const handleSearch = () => {
    handleNameChange(name);
    handleMuscleGroupChange(muscleGroup);
  }

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

    if (loading) return (
      <Menubar className='h-18 bg-secondary rounded-none'>
        <MenubarMenu>
          <MenubarTrigger className='!px-1'>
            <Skeleton className="h-8 w-[80px]  bg-slate-700" />
          </MenubarTrigger>
          <MenubarContent>
            {Array(7).fill().map((_, index) => (
              <MenubarItem key={index}>
                <Skeleton className="h-8 w-[250px]  bg-slate-700" />
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className='!px-1'>
            <Skeleton className="h-8 w-[180px]  bg-slate-700" />
          </MenubarTrigger>
          <MenubarContent>
            {Array(3).fill().map((_, index) => (
              <MenubarItem key={index}>
                <Skeleton className="h-8 w-[200px] bg-slate-700" />
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <div className="flex w-full max-w-sm items-center">
              <Skeleton className="mx-0 h-8 w-40 bg-slate-700" />
            </div>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    )
    

  return (
    <Menubar className='h-18  bg-secondary rounded-none'>
      <MenubarMenu>
        <MenubarTrigger className='!px-1'>Type</MenubarTrigger>
        <MenubarContent>
          {['Cardio', 'Olympic_weightlifting', 'Plyometrics', 'Powerlifting', 'Strength', 'Stretching', 'Strongman'].map((type, index) => (
            <MenubarItem key={index} onClick={() => handleTypeChange(type)}>
              {type}
            </MenubarItem>
          ))}
        </MenubarContent>

      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className='!px-1'>Difficulty</MenubarTrigger>
        <MenubarContent>
          {['Beginner', 'Intermediate', 'Expert'].map((difficulty, index) => (
            <MenubarItem key={index} onClick={() => handleDifficultyChange(difficulty)}>
              {difficulty}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <div className="flex w-full max-w-sm items-center">
            <Input className='mx-1' type="text" placeholder="Movement" value={name} onChange={(e) => { setName(e.target.value); }} />
            <Input className='mx-1' type="text" placeholder="Muscle group" value={muscleGroup} onChange={(e) => setMuscleGroup(e.target.value)} />
            <Button type="submit" className=" mx-0 bg-slate-500 hover:bg-slate-700" onClick={handleSearch}>Search</Button>
          </div>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
