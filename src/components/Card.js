import React from "react";

import { StyledCard } from "./styles/Card.styles";

import { ReactComponent as Collab } from "../images/collab.svg";

const Card = ({ item: { id, title, body, image } }) => {
    let temp = image.substr(13,8)
    //  temp = temp.replace('.','.svg') 
     temp = temp.split('.') ;
     temp = temp[0]+'.svg'

  console.log('substring',temp );
  return (
    <StyledCard>
      <div>
        <h2>{title}</h2>
        <p className="">{body}</p>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <image href={`../images${temp}`} height="200" width="200" />

        </svg>
        <object src={`../../public/images${image}`} alt="" />
      </div>
      <div></div>
    </StyledCard>
  );
};

export default Card;
