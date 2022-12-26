import React from "react";
import { Card, Container,Col } from "react-bootstrap";
// import {Button} from "react-bootstrap";
import { Data } from "../../Utils/Data";

const Items= props =>{
    return (
      <Container>
        <Col>
          <div className="d-flex justify-content-center align-items-center m-4 ">
            {Data?.map((elem) => (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={elem?.imageUrl} />
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <p> <b>$ {elem?.price}</b></p>
                    <p> <b>{elem?.name}</b> </p>
                    {/* <Button variant="warning">Add To Cart</Button> */}
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Container>
    );    
}


export default Items;