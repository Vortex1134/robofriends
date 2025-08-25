import React from 'react'
import './cardlist.scss'
import Card from '../card/Card'

const CardList = ({robots}) => {
  return (
    <>
        {robots.map(robot => (
            <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
        ))}
    </>
  )
}

export default CardList