import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null)
    return comments.map((comment) => {
      return (
        <div>
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        </div>
      );
    });
  else return <div></div>;
}
const Dishdetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <div className="col-12 col-md-5 m-1">
            <h4>comments</h4>
            <ul className=" list-unstyled ">
              <RenderComments comments={props.dish.comments} />
            </ul>
          </div>
        </div>
      </div>
    );
  else {
    return <div></div>;
  }
};

export default Dishdetail;