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
    comments.map((comment) => { 
  return ( 
  <div>  
  <li className=" list-unstyled " key={comment.id}>
    <p>{comment.comment}</p>
    <p>-- {comment.author}, {comment.date}</p>
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
    {this.renderDish(this.props.selectedDish)}
    </div>

    <div className="col-12 col-md-5 m-1">
    <div>
    <h4>{this.props.comments}</h4>
    <ul calassName = "list-unstyled">
    {this.renderComments(this.props.selectedComments)}
    </ul>
    </div>
    </div>
    
    </div>
    </div>
  )}
}

export default DishdetailComponent



