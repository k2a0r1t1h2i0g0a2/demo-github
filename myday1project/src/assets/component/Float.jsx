import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Float = () => {
    return (
        
        <>
            <Row>
           <Col md='auto'>  <FloatingLabel
                controlId="floatingInput"
                label="Enter customer name"
                className="mb-9"
            >
                <Form.Control type="text" placeholder="Enter customer name" />
            </FloatingLabel> </Col>
            <Col md='auto'><FloatingLabel controlId="floatingPassword" label="Invoice id">
                <Form.Control type="text" placeholder="Invoice id" />
                </FloatingLabel></Col>
            
            <Col md='auto'><FloatingLabel  controlId="floatingPassword" label="Start Date">
                <Form.Control type="text"  placeholder="Invoice id"/>
                </FloatingLabel></Col>

                <Col md='auto'><FloatingLabel   controlId="floatingPassword" label="End Date">
                <Form.Control type="text"  placeholder="Invoice id"/>
                </FloatingLabel></Col>
                </Row>
        </>
    );
} ;

export default Float;