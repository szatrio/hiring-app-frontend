import React from 'react'
import '../../styles/engineer/cards.css'
import { Row } from 'react-bootstrap'
import jwt from '../../helpers/jwt'

let img =  ['https://s3-alpha-sig.figma.com/img/2c5b/bbea/281d901474321e52fff7ec979de2b7e6?Expires=1579478400&Signature=H4iOugFF7WcHaBQ90Sq3C4jySa5hzBZzcArdOV4mfT6JvwZlqNUMUPX~U7Z0qLw19fh2~71P5YcFi9~73Ai19C~RvSrZhgLQe2iJ2qDb7~HXQX3XuYRp-vuCXJyESQ0f~aso1z1xPjTVdl32sFGaeBzbNdV3Y-FndxqrMhLUsc3gybwU3qeDMYKjPIfHoVz0DRfEcVsifHKb5B6oIGbPdTPxh-aEyUIcUpvBODat~AkxOMC7ozadgf3Ro90KkymLuhPM3pJwPh2qKeI-WYp8TGA9wcf2T6HEmomTHQGU-ICDvP7gsSlFpoF91jyqcTUkk2fcOM7YghFI24KAHJZytQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
'https://s3-alpha-sig.figma.com/img/5568/c54d/5a9078ab00d5c9c866be9e12e2c7013c?Expires=1579478400&Signature=aa78vny~I1L5RWUn1KBJWDjQMD2-M9EOyECkbznOiQfIbazZ0a79TA3oFcMSzxksNrjerm6wt8q1JtpEI8ReywzUjbNoLYwFoqV6sLCWHLHgZHtvlDXVPFmHKLOMDsJJpvc2j0pAl4eNEfWGy5c9OqmCqps8SttVnjB5ihhgqKwd7rW~xGFPDK98X48OtQ6NdBT4deF-CoD1H-QEiyaiWK2p-8O4UfwHDFUhqB~605b0-MHkknA33Sf3NQy1xYhbBCAxt8LjXeokjz77F-HPxGxME7RF146hweiz7K7BsuNUbje66t~CsFNIAhFOmdO53QG4LSNKJC1oqVUQmo0VcQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
'https://s3-alpha-sig.figma.com/img/af19/7ec6/375eaf63184e00eaf810723e728dce09?Expires=1579478400&Signature=U0k463HKHF52pqCAlkwG5DxdZ1yhXby9mnQjPvlI~fgmiw0GOXSUK0sqrLLL4ZbgOziXWYGUXQQ~TRGe6Fb~91R5SX35B3-vu6~DXV60Bb3Dv3auCJdL1Ib1yZoGODmphph3NJ6Y2QKB1PSPXWoGihWhQf1TrhV6y1eQ9S7058LUMgFOMiiiFXTZrpdbqIEdy2NbNqjRIuKM3RxM9ozeq4Ay7QuyNZEVePNdYHOUF-OZJP53APVJOW8INsgZVciF7gKpBTSsQl8Ai7bijCotuBCPxGLzxOFl~l-iudIGGUVTEiRsCGBDYmwjsA1jAD0H9WAJimCRUlTj7lxjXbm8Ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
'https://s3-alpha-sig.figma.com/img/77ed/8948/05a8824a4d7d6bae845d1216dd25d1ce?Expires=1579478400&Signature=KzKAi5o4HWZ4gdMjTzMmXoub2NidIk4ZxSWTRapnOjYUiEhAb41lB0EvMCSUqogEMQS63f1wE-tYVO46Aq7DL3zFwnCgnPlqU4xSjImb7LkQZd2imvekrhm~6x6HKbjr83QsTPKz2~5GdITgIJTbohnxubPRYkH87C3J7PrUasYxMFUkwmdzo2AhoM4oiyPqayAtVEcqqMBJRDAmZ-h4LWGAulT8hrJo1DoeL8HohROAvoCB6BUqY6s-fvOyMllJtLIWVvzDGRbjDqegEHKm0e0qmPD~vX1bG9hjiQoLaP7z7lWIQ0-y7nugqZgc43zGB9ApyuY2UciktGEIxOn2Kg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
// 'https://s3-alpha-sig.figma.com/img/789a/7c4b/a00490984307b345b27c373277270b04?Expires=1578268800&Signature=dm-ln3Iidpnzx-3yP2HwK8Wf2dSKwcUmQt5s7kSifczrABpEwHZ2op3C4rTQ3m1raEqPwo-9luOPNm1jGPf8-5x0guIwQVHP2TBMipzmcnAKtHUSiEMSH~nDb08LPlMLw6eGpgx-t455zI-W7NJsD99UZmPZtpdQjpBiH9M5Wrr4QICW~anWhTzDbvDu8WjneaxIAmik22SdNru9myf02CQTMZEWiH95z7OZLvs-d7RndBCJBavEvVnxznEUJJTJUo6J4pE4cYNFPkPFtf7bwYslHqStgr0fYVFX6k9GKHk9eYU1ILhrvfkgPDy4CAjOZNYmo2kx1kBRbA2cjtmeGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
]


const Cards = (props) =>{
    // console.log(props.list.filter(engineer => engineer.id_engineer == jwt().id_user),"ini prop").map(engineers =>(
    // console.log(jwt().id_user,"ini lokal storage")
    return(
        <>
        {/* response.filter(response => response.id_user == req.user.id_user */}
            <Row className="justify content-center m-4">
                {props.list.filter(engineer => engineer.id_engineer == jwt().id_user).map(engineers =>(
                    <div className="mt-2" key={engineers.id_engineer}>
                        <div id="cardProfile">
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

export default Cards 