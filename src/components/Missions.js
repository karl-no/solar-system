import React from 'react';
import Title from './Title';
// import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {/* <div>
          {missions.map({ name, year, country, destination } => ())}
        </div> */}
      </div>
    );
  }
}

export default Missions;
