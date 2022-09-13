import React from "react";

import { StyledCard } from "./styles/Card.styles";

import { ReactComponent as Collab } from "../images/collab.svg";

const Card = ({ item: { id, title, body, image } }) => {
  console.log("Hey image", image);

  // let temp = image.substr(13,8)
  // //  temp = temp.replace('.','.svg')
  //  temp = temp.split('.') ;
  //  temp = temp[0]+'.svg'

  //   console.log('substring',temp );
  //   console.log('substring-->',`.${image}` );
  return (
    <StyledCard layout={id % 2 === 0 && 'row-reverse'} >
      <div>
        <h2>{title}</h2>
        <p className="">{body}</p>
      </div>
      <div>
        <img src={`.${image}`} />
      </div>
    </StyledCard>
  );
};

export default Card;
