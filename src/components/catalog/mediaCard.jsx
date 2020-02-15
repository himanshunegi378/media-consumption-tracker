import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class MediaCard extends Component {
  render() {
    return (
      <>
        <Card className="m-3 " style={{ width: "18rem", height: "30rem" }}>
          <Card.Img
            className="h-50 w-auto"
            variant="top"
            src={this.props.imageLink}
          />
          <Card.Body className="h-50">
            <Card.Title className="h-25">{this.props.media.title}</Card.Title>
            <Card.Text className="overflow-auto h-50">
              {this.props.media.overview}
            </Card.Text>
            <Button variant="primary">Detail</Button>
          </Card.Body>
        </Card>

      </>
    );
  }
}

export default MediaCard;
