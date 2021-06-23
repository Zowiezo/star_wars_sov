import React from 'react';

interface Props {
  name: string;
  height: number;
  mass: number;
  gender: string;
  homeworld: string;
}

const CharacterContent = ({ name, height, mass, gender, homeworld }: Props ): JSX.Element => {

  return (
    <div className="characterContent">
      <div className="characterPoster">
        <h1>{name}</h1>
      </div>
      <div className="characterInfo">
        <div className="characterDetail">
          <p>
            <b>HOME WORLD</b>
            <br />
            {homeworld}
          </p>
          <p>
            <b>GENDER</b>
            <br />

            <small><span>{gender}</span></small>
          </p>
        </div>
        <div className="characterDetail">
          <p>
            <b>HEIGHT</b>
            <br />
            {height}
            <small><span>{}</span></small>
          </p>
          <p>
            <b>MASS</b>
            <br />
            {mass}

            <small><span>{}</span></small>
          </p>
        </div>

      </div>
    </div>
  );
};
export default CharacterContent;
