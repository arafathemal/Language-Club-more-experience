import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import "./Home.css";

const Home = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, []);
    return (
        <div>
            {/* banner part */}
            <div className="home-container">
                <div>
                    <h4>
                        We live in a multilingual world, where connections are now more important than ever. The world is becoming increasingly globalized and knowing a second language can always give you an unfair advantage.A second language can drastically change your career. Living in an interconnected world means that more and more jobs are advertising positions where knowing more than one language is essential.
                        As more companies trade internationally and create relationships with other countries, employees are often asked to travel for work, enhance these relationships, or be relocated abroad.
                    </h4>
                </div>
                <div>
                    <img className="img-fluid" src="https://cdn.studyfrenchspanish.com/wp-content/uploads/2019/09/benefits-of-language-learning-1160x653.jpg" alt="" />
                </div>
            </div>
            <hr />
            <h3>Demo course List</h3>

            {/* data load part */}
            <div className="row">
                {
                    loadData.slice(0, 4).map(data => (
                        <Card className="card" style={{ width: '18rem' }}>
                            <Card.Img className="img-style" variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>Name: {data.name}</Card.Title>
                                <h6>Duration: {data.duration}</h6>
                                <h5>Discount: {data.discount}</h5>
                            </Card.Body>
                        </Card>
                    )
                    )
                }

            </div>
            <hr />


        </div>
    );
};

export default Home;