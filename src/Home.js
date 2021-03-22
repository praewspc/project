import React from 'react';

import {Row , Col} from 'react-bootstrap';
import Sidebar from "./home/Sidebar";
import BlockContain from "./home/BlockContain";

function Home() {
    return (
      

      <div className="Home">
        <Row className="landing2">
          <Col className="Sidebar" ><Sidebar /></Col>
          <Col className="BlockContain"><BlockContain /></Col>
        </Row>
      </div>
    );
  }
  
  export default Home;
  