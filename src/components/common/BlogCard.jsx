import Card from 'react-bootstrap/Card';

function BlogCard({name,username,email,street,suite,city,phone,website}) {
  return <div className='mx-auto'>
    <Card style={{ width: '30rem',padding:"10px"}}>
      <Card.Title>{name}</Card.Title>
      
      <Card.Body>
      <Card.Text>
          {username}
        </Card.Text>
        <Card.Text>
          {street}
        </Card.Text>
        <Card.Text>
          {suite}
        </Card.Text>
        <Card.Text>
          {city}
        </Card.Text>
        <Card.Text>
          {phone}
        </Card.Text>
        <Card.Text>
          {website}
        </Card.Text>
        
        
      </Card.Body>
    </Card>
    </div>
}

export default BlogCard;