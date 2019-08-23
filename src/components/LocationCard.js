import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <div>
      <Card>
        <Card.Content header={props.location.name} />
        <Card.Content
          description={`${props.location.type}: ${props.location.dimension}`}
        />
        <Card.Content extra>
          <Icon name="user" />
          Residents: {props.location.residents.length}
        </Card.Content>
      </Card>
    </div>
  );
}
