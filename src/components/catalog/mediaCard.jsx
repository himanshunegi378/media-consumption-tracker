import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import eyeLink from "./eye.jpg";
import {Link, withRouter} from "react-router-dom";

class MediaCard extends Component {
  render() {
    return (
      <>
        <Card onClick={()=> this.props.history.push(`/detail/${this.props.media.ids.trakt}`)}  className="m-3 z-d card-4 " style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="h-50 w-auto"
            variant="top"
            src={
              this.props.imageLink !== "N/A" ? this.props.imageLink : eyeLink
            }
          />
          <Card.Body className="h-50">
            <Card.Title className="h-25">{this.props.media.title}</Card.Title>
            <Card.Text className="overflow-auto h-75">
              {this.props.media.overview}
            </Card.Text>
            {/*<Button variant="primary">Detail</Button>*/}
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(MediaCard);
