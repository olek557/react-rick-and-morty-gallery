import React from "react";

const Character = (props) => {
    // console.log(props)
    return <div className="card" key={props.character.id} >
            <div className="card__image">
                <img
                src={props.character.image}
                alt="rick"
                />
            </div>
            <div className="card__info">
                <div className="card__info-row">Name: {props.character.name}</div>
                <div className="card__info-row">Gender: {props.character.gender}</div>
                <div className="card__info-row">Species: {props.character.species}</div>
                <div className="card__info-row">Location: {props.character.location.name}</div>
            </div>
            </div>
}
export default Character;