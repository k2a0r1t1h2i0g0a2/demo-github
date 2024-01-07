import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Column = () => {
    return (
        
         <Row style ={{textAlign:'left'}}>
            <Col className="mb-3">Customer</Col>
            <Col className="mb-3">Invoice Id</Col>
            <Col className="mb-3">Start Date</Col>
             <Col className="mb-3">End Date</Col>
        </Row>
        
    );
};

export default Column;
