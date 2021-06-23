
import React, { FC } from 'react';
import Link from 'next/link'

interface CardProps {
  name?: string;
  detail?:any
  id?:any;
  key?: any;
}

const CharacterCard: FC<CardProps> = (props): JSX.Element => {
  const name = props.detail;
  return (
    <div>
    <Link href="/character">
      <div className="profile_content">
        <h3>{name}</h3>
        <div className="read_more d-flex-row">
          &nbsp;Show More
        </div>
      </div>
    </Link>
    </div>
  );
};

export default CharacterCard;