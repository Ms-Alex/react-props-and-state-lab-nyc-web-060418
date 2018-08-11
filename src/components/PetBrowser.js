import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petsMapper = () => {
    return this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet} /> )
  }

  render() {
    return (
    <div className="ui cards">

      {this.petsMapper()}

    </div>
    )
  }
}

export default PetBrowser
