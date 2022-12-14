import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetas">
        <Title headline="Planetas" className="planetasTitle" />
        {planets.map(({ name, image }, index) => (
          <PlanetCard key={ index } planetName={ name } planetImage={ image } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
