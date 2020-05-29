import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent'

class Menu extends Component {
constructor(props) {
  super(props);

  this.state = {
      selectedDish: null,
      selectedComments:null
  }
}

onDishSelect(dish, dishComments,comments) { 
  return (    
    this.setState({ selectedDish : dish}),
    this.setState({ selectedComments : dishComments}),
    this.setState({comments : comments})
  )
}

render() {
  const menu = this.props.dishes.map((dish) => {
    return (
      <div  className="col-12 col-md-5 m-1">
        <Card onClick={() =>  this.onDishSelect(dish, dish.comments,'comments')} key={dish.id} >
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    )
  });
    return (
      <div className="container">
          <div className="row"> 
              {menu}
          </div>
          <div className="row">
            <Dishdetail selectedDish={this.state.selectedDish} selectedComments={this.state.selectedComments} comments={this.state.comments}
              />  
          </div>
      </div>
    );
  }
}

export default Menu;