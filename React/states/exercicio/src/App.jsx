import React, { useState } from 'react'
import PokemonCard from './Components/PokemonCard/PokemonCard';
import { pokeMons } from './Components/Data';
import { FlexContainer, ContainerMon } from './stylesApp';
import { PokemonName } from './Components/PokemonCard/styles';

function App() { 
  
  const [pokeMon, setPokeMon] =useState(pokeMons)
  let nCard=pokeMons.length;
  let index=0

   return (<>


    <FlexContainer>
      <div>
        <h1>Labmon</h1>
      </div>      
      <ContainerMon>
        {
           pokeMon.map ( (obj) => (
           <PokemonCard pokeMon={pokeMon} setPokeMon={setPokeMon} id={obj.id}/>
           )) 
        }
      </ContainerMon>
    </FlexContainer>
  </>

  );
}

export default App;
