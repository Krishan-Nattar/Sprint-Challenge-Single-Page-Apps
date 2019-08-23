import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function CharacterCard(props) {
  console.log(props.character);
  return (
  
  <div><Card>
  <Image src={props.character.image} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{props.character.name}</Card.Header>
    <Card.Meta>
      <span className="date">{props.character.species}: {props.character.status}</span>
    </Card.Meta>
    <Card.Description>
      <p>Location: {props.character.location.name}</p>
      <p>Origin: {props.character.origin.name}</p>
    </Card.Description>
  </Card.Content>
  <Card.Content extra>
    <p>
      <Icon name="play" />
      Episodes: {props.character.episode.length}
    </p>
  </Card.Content>
</Card></div>
  
  
    );
}
