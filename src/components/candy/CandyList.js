import React, { Component } from 'react'

class CandyList extends Component {
  render() {
    return (
      <div className="candies list">
        {
          this.props.types.map(type =>
            <div key={type.id}>
              {type.type}:<br />
              {this.props.candies.filter(candy => candy.typeId === type.id)
                .map(currentCandy =>
                  <div key={currentCandy.id}>
                    {currentCandy.name}
                    <button
                           onClick={() => this.props.discontinuedCandy(currentCandy.id)}
                           className="card-link">Discontiued</button>
                  </div>
                )}
            </div>
          )
        }
      </div>
    )
  }
}

export default CandyList