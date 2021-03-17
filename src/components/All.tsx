import { useState } from 'react';

import { SideBar } from './SideBar';
import { Content } from './Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function All() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <>

      <SideBar
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={(id: number) => setSelectedGenreId(id)}
        selectedGenre={selectedGenre}
        setSelectedGenre={(genre: GenreResponseProps) => setSelectedGenre(genre)}
      />
      <Content selectedGenreId={selectedGenreId} selectedGenre={selectedGenre}/>

    </>
  )
}