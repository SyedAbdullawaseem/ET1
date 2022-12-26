import React from "react";
import { Card, Container } from "react-bootstrap";

const Home = (props) => {
  return (
    <Container fluid className="mt-3 ">
      <Card.Header style={{ backgroundColor: "gray", textAlign: "center" }}>
        <h1>The Generics</h1>
        <h5>Get our latest Album</h5>
      </Card.Header>
      <ul>
        <li>
          JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE<button>Buy Tickets</button>
        </li>
        <li>
          JUL19 TORONTO,ON BUDWEISER STAGE<button>Buy Tickets</button>
        </li>
        <li>
          JUL 22 BRISTOW, VA JIGGY LUBE LIVE<button>Buy Tickets</button>
        </li>
        <li>
          JUL 29 PHOENIX, AZ AK-CHIN PAVILION<button>Buy Tickets</button>
        </li>
        <li>
          AUG 2 LAS VEGAS, NV T-MOBILE ARENA<button>Buy Tickets</button>
        </li>
        <li>
          AUG 7 CONCORD, CA CONCORD PAVILION<button>Buy Tickets</button>
        </li>
      </ul>
    </Container>
  );
};

export default Home;

