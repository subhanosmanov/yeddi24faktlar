import { useEffect } from 'react'
import Footbal from './football/footbal';
import Technology from './technology/technology.jsx';
import Aphorism from './aphorism/aphorism.jsx';
import Hero from '../../components/hero/hero.jsx';
import Landscape from './landscape/landscape.jsx';
import Animals from './animals/animals.jsx';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: "60px" }}>
      <Hero />
      <Technology />
      <Landscape />
      <Footbal />
      <Aphorism />
      <Animals />
    </div>
  )
}

export default Home;