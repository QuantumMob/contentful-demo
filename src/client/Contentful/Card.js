import React from 'react';
import { Card as ReactCard, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';


class Card extends React.Component {
  render() {
    const { data } = this.props
    return (
      <Row>
        <Col md='4'>
          <ReactCard>
            <CardImg top width="100%" src={data.imageUrl} />
            <CardBody>
              <CardTitle>{data.title}</CardTitle>
              <CardSubtitle>{data.subtitle}</CardSubtitle>
              <CardText>{data.description}</CardText>
              <Button>{data.buttonText}</Button>
            </CardBody>
          </ReactCard>
        </Col>
        <Col md='4'>
          <ReactCard>
            <CardImg top width="100%" src={data.imageUrl} />
            <CardBody>
              <CardTitle>{data.title}</CardTitle>
              <CardSubtitle>{data.subtitle}</CardSubtitle>
              <CardText>{data.description}</CardText>
              <Button>{data.buttonText}</Button>
            </CardBody>
          </ReactCard>
        </Col>
        <Col md='4'>
          <ReactCard>
            <CardImg top width="100%" src={data.imageUrl} />
            <CardBody>
              <CardTitle>{data.title}</CardTitle>
              <CardSubtitle>{data.subtitle}</CardSubtitle>
              <CardText>{data.description}</CardText>
              <Button>{data.buttonText}</Button>
            </CardBody>
          </ReactCard>
        </Col>
      </Row>
    );
  }
}

export default Card
