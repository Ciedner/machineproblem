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
          <Image src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/298091945_1537082493387253_2053066261217040667_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGwubTrKENFNOzML7GCtCIiC--hx_tSBOkL76HH-1IE6Vru0_g22OKH_pnQsHe-Qmb-Y2TXJjJZY5NPxDwp7g30&_nc_ohc=zekF7gHo6hoAX_Xlb7F&_nc_ht=scontent.fceb1-3.fna&oh=00_AfD1CIUnNuPWqkpTQGLsdF8zR2G14IjJUmDi0RyxluDaAw&oe=644EC9A0" roundedCircle className="w-100 mb-3" />
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
