import React from 'react';
import { Card, Icon, Image } from "semantic-ui-react";

const EpisodeCard = (props) => {
    return ( 
    
    <div><Card>
    <Card.Content header={props.episode.name} />
    <Card.Content description={props.episode.episode} />
    <Card.Content extra>
      <Icon name='user' />
      Characters: {props.episode.characters.length}
    </Card.Content>
  </Card></div>
    
    );
}
 
export default EpisodeCard;