import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import './Service.css';

const Service = () => {
    const [newData, setNewData] = useState([])
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setNewData(data))

    }, []);

    return (
        <div className="container-div">
            <h1>Our service details here</h1>
            <Row xs={1} md={4} className="g-4">
            {
                newData.map(data => (
                    
            <Col>
                <Card>
                    <Card.Img className="img-style" variant="top" src={data.img} />
                    <Card.Body>
                        <Card.Title>Name: {data.name}</Card.Title>
                        <Card.Text>
                        Others are spoken by huge populations across different countries, and are often popular choices among language learners.
                        </Card.Text>
                        <h5>Payment: {data.pay}</h5>
                        <h5>Discount: {data.discount}</h5>
                        <h5>Duration: {data.duration}</h5>
                        <Button>Purchese</Button>
                    </Card.Body>
                </Card>
            </Col>
                    
                ))
            }
            </Row>
            <hr />
        </div>
    );
};

export default Service;