import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,CardTitle } from 'reactstrap';

export class DishdetailComponent extends Component {
renderDish(dish) {
  if (dish != null)
    return(
      <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
      </Card>
    );

  else
  return(
  <div></div>
  );
}

renderComments (comments)  {
if (comments != null)
  return(
    comments.comments.map((comment) => {
  return (
  <div>
  <li  key={comment.id}>
    <p>{comment.comment}</p>
    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
  </li>
  </div>
    );
    })
  )
  else
  return(
  <div></div>
  );
}

render() {
  return (
    <div className="container">
    <div className="row">

    <div className="col-12 col-md-5 m-1">
    {this.renderDish(this.props.dish)}
    </div>

    <div className="col-12 col-md-5 m-1">
    <div>
    <h4>{this.props.com}</h4>
    <ul className=" list-unstyled ">
    {this.renderComments(this.props.dish)}
    </ul>
    </div>
    </div>

    </div>
    </div>
  )}
}

export default DishdetailComponent
