import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <h2 className="text-center my-5">About Us</h2>
          <p className="text-center">
          We pride ourselves on our ability to understand and cater to the unique needs of each of our clients. Our team of experienced professionals is dedicated to delivering exceptional quality and value to our customers. At ABC Company, we believe in pushing boundaries and constantly striving for excellence. We are committed to staying at the forefront of technology and delivering world-class solutions to help our clients succeed in their respective fields.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center my-5">
        <Col lg={4}>
          <Image src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.15752-9/341927532_1666461320481947_6790273207105067725_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGOp7F_EtLFZxF5Zu3K5fYQpZjpX0bkt9elmOlfRuS31yurGvyy6-Jc115We0h8J_Yjaz0uKx5CyaGohj7yH-CV&_nc_ohc=pDYHg0-WWFkAX_7sVtu&_nc_ht=scontent.fmnl25-2.fna&oh=03_AdT9WtfFzuJPQcN6x8rZEVZvkxjPUprAb8NDzXnJEhH8eA&oe=6477C403" />
          <h4 className="text-center mb-3">Gilbert Canete</h4>
          <p className="text-center">
            Ako si Gilbert Canete Jr. Anak ni Lorna ug Edsel. Akong edad kay 25 na pero cutie pie gihapon ko. Akong amego na si Ciedner ang nagbutang ug nwng nako diri kay wa na siyay mabutang na laing nwng sa iyang about us na page maong ni desisyon nalang siya na ako nalang na nwng kay choy gwapo pogi man daw ko.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
