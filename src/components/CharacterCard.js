import React from "react";
import {Card, CardBody, CardImg, CardText} from "reactstrap";
import { tsPropertySignature } from "@babel/types";

export default function CharacterCard(props) {
  
  return (
    <Card>
      <CardBody>
        <div className="char-card">
      <CardImg src={props.image} />
        <CardText>Name: {props.name}</CardText>
        <CardText>Status: {props.status}</CardText>
        <CardText>Species: {props.species}</CardText>
        <CardText>Gender: {props.gender}</CardText>
        </div>
      </CardBody>
    </Card>
  )
}
