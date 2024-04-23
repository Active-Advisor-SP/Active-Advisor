import React from 'react'
import Card from "react-bootstrap/Card";
import './feed.css'

function Feed() {
  return (
    <div>
        <Card className='communityCard' style={{ margin: "10px" }}>
                <Card.Body>
                  <img
                    src="https://cdn.britannica.com/51/190751-131-B431C216/soccer-ball-goal.jpg"
                    width={200}
                    alt=""
                  />
                  <br />
                  <Card.Title>The Football Hub</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Free / Paid Options 
                  </Card.Subtitle>
                  <Card.Text>
                    Hi! Are you a passionate football lover? Join our community
                    where we organize friendly tournaments for you to showcase
                    your skills and connect with fellow enthusiasts. Whether
                    you're an experienced player or just starting out, our
                    community welcomes everyone who shares a love for the
                    beautiful game. Join us today and be a part of fostering a
                    sense of camaraderie among football lovers. See you there!
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
              <Card className='communityCard' style={{ margin: "10px" }}>
                <Card.Body>
                  <img
                    src="https://cdn.britannica.com/51/190751-131-B431C216/soccer-ball-goal.jpg"
                    width={200}
                    alt=""
                  />
                  <br />
                  <Card.Title>The Football Hub</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    The Football Hub
                  </Card.Subtitle>
                  <Card.Text>
                    Hi! Are you a passionate football lover? Join our community
                    where we organize friendly tournaments for you to showcase
                    your skills and connect with fellow enthusiasts. Whether
                    you're an experienced player or just starting out, our
                    community welcomes everyone who shares a love for the
                    beautiful game. Join us today and be a part of fostering a
                    sense of camaraderie among football lovers. See you there!
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
    </div>
  )
}

export default Feed