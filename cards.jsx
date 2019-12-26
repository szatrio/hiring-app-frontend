import React from 'react'
import '../../styles/engineer/cards.css'
import { Row, Col } from 'react-bootstrap'


const Cards = (props) =>{
    return(
        <>
            <Row className="justify content-center">
                {props.list.map(companies => (
                    <Col className="mt-2" key={companies.id_company}>
                            
                            {/* <small>{companies.description}</small><br/> */}
                        {/* <Card>
                            <Card.body>
                            </Card.body>
                            <Card.Footer>
                            </Card.Footer>
                        </Card> */}
                        <div className="card" id="cardProfile">
                            <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt=""></img>
                            <div className="card-body" id="cardBody">
                                <h5 className="card-title">{companies.name}</h5>
                                <p className="card-text">{companies.description}</p>
                                <a href="/" className="btn btn-primary">Go to Profile</a>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cards 