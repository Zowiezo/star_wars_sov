// import React, { useEffect, useState, FC } from 'react';
// import axios from 'axios';
// import CharacterContent from './CharacterContent';
// import '../../../styles/characterDetail.css';

// interface DetailProps {
//   mass: number;
//   homeworld: string;
//   characterData: any;
//   characterId: any;
//   id: any;
//   match: any
// }

// const CharacterDetail: FC <DetailProps> = (props): JSX.Element => {
//   const { id: characterId } = props.match.params;
//  // const [characterData, setCharacterData] = useState<any>(null);
//  // const [isLoading, setIsLoading] = useState(true);
//   //const [homeworld, setHomeworld] = useState<string>('');

//   useEffect(() => {
//     async function getData() {
//       const characterDetail = await axios.get(`https://swapi.dev/api/people/${characterId}/`);
//       //const { homeworld: homeworldLink } = characterDetail.data;




//      }

//     getData();
//   }, [characterId]);

//   return isLoading ? (
//     <div>
//       <main className="characterBg">
//        <CharacterContent
//     //      characterInfo={{ ...characterData }}
//     //      homeworld={homeworld}
//         />
//       </main>
//     </div>
//   )
// }

// export default CharacterDetail;