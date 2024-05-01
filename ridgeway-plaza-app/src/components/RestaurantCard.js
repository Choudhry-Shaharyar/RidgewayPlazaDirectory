import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import './RestaurantCard.css'; // Assuming your CSS file is named RestaurantCard.css

function RestaurantCard({ name, address, image, phone, website, category }) {
  return (
    <Card className="restaurant-card">
      <Card.Img variant="top" src={image} />
      {category && <Badge variant="warning" className="category-badge">{category}</Badge>}
      <Card.Body>
        <Card.Title className='name'>{name}</Card.Title>
        <Card.Text className='address'>{address}</Card.Text>
        <Card.Text>{phone}</Card.Text>
        <Button variant="dark" href={website} className="btn-website">Go to Website</Button>
      </Card.Body>
    </Card>
  );
}

export default RestaurantCard;
