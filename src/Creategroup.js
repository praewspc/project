import React from 'react';

import {Row , Col} from 'react-bootstrap';
import Sidebar from "./home/Sidebar";
import Blockcreate from "./creategroup/Blockcreate";

function Creategroup() {
    return (
      

      <div className="Home">
        <Row className="landing2">
          <Col className="Sidebar" ><Sidebar /></Col>
          <Col className="Blockcreate"><Blockcreate /></Col>
        </Row>
      </div>
    );
  }
  
  export default Creategroup;
  