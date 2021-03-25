import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        id={
          id => <Content id={id}/>
        }
      />      
    </div>
  )
}