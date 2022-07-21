import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((callback, index) => (<MissionCard
            key={ index }
            name={ callback.name }
            year={ callback.year }
            country={ callback.country }
            destination={ callback.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
