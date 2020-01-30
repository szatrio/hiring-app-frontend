import React, {Component} from 'react'
import '../../styles/engineer/cards.css'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'


let img =  [
    require("../../assets/img/photo1.jpg"),
    require("../../assets/img/photo2.jpg"),
    require("../../assets/img/photo3.jpg"),
    require("../../assets/img/photo5.jpg")
]


class Cards extends Component{

    selectProfile = (e) =>{ 
        this.props.getDataFromCard(e)
      }

    render(){
        // console.log(this.props,"ini props kartu")
        return(
            <>
                <Row className="justify content-center m-4">
                    {this.props.list.map(engineers => (
                        <div className="mt-2" key={engineers.id_engineer}>
                            <div id="cardProfile" onClick={()=>this.selectProfile(engineers.id_engineer)}>
                                <img src={img[Math.floor(Math.random() * img.length)]} alt="" id="cardImg"/>
                                <img src="https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg" alt="" id="black"/>
                            </div>
                                <div id="cardBody">
                                <h5>{engineers.name}</h5>
                                    <p id="desc">{engineers.description}</p>
                                    <Row id="stats">
                                        <div id="check"></div>
                                        <p id="statsfont">
                                            Success Rate
                                        </p>
                                        <div id="star"></div>
                                        <p id="statsfont">
                                            Success Rate
                                        </p>
                                    </Row>
                                    <p id="skills">Skills: <br></br>
                                    {(engineers.skills)?
                                    engineers.skills:
                                    <p>
                                        -
                                    </p>
                                    }
                                    </p>
                                    {/* <a href="/" className="btn btn-primary">Go to Profile</a> */}
                                </div>
                        </div>
                    ))}
                </Row>
            </>
         )
    }
}

const mapStateToProps = state => (
    {
        engineers: state.engineers
    }
  )

export default connect(mapStateToProps)(Cards) 