import React from 'react'
import '../../styles/engineer/cards.css'
import { Row, Col } from 'react-bootstrap'

let img =  ['https://s3-alpha-sig.figma.com/img/e25d/3425/076a46cfbc1efe1dc68f68fd5f13a712?Expires=1578268800&Signature=NQkUerpalaPC279rOaiplDXExR~SJaSRRoSEBVzrzS5WuBc0btOcDx2w8RYR90SPFvoJ1x-JEBKBtWNzA7Ic57pDbId0sX69Ee-vr3fUqI2g88L2B0yu7Eil8n6zp48jwwKUa4erZCmcVNz511YnQzCZQ7Jzg5szqOBMwBNKCpi1koNZmqa-uLOVduHOZr~YzMF6n1OTUPK-TmoQx3KqUklckgSRbpwkrhj9dBkDHFqNHNSei1K-yaGKbLENOv~Rtr2ku0CerffWH98cKZCNJUM1gk~7Nj0egS0SbG1p8PQwkJHn7i6s30QtI-GF-wzcUO5xpgpxb8~Bz57Od-9zIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
'https://s3-alpha-sig.figma.com/img/6153/3310/b91004aa88b52e2371c260cfd7d67d07?Expires=1578268800&Signature=NJqfL37dH249JcehYImljGLxqEaqkKr1f5X0JxaHjAbQ71Jv6hYkIJUPKPeudJ-WSJeB0IPpWwBT8k7GJ0a17RrOX7wyXj6EJXK1qRnET2WvSd7tW6I6z1yWaqswF5XHngfT~BZ~PsIrkq3eyCt-Of37e7d5B1tz9K5uADRtJRUOcAXPSZQ6Lf4Oel-ZQF-oaoCQs-GrC4OnHhNrBpb3PUJjtc5GEL1QoV5TeyM8wdPk-KFEvCyE9y7zPNTP15sR~Tre~1uZ~MOwbYHeYX5m4A74SE~UAd-bB8p4LavWaTWNNlMjHX0F0HXQGmOGCz2tXd0E5hOHYYe7oBwxIbHE4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
'https://s3-alpha-sig.figma.com/img/8a22/8acc/bf4bcd616705d42d30fc7d815e1018a4?Expires=1578268800&Signature=gauILMzUxrZc0jqfCpd1QJw~HVRCo70Ff7RVEsk0mOZnaZYbbVC3tW1L0FPBVSA4tvy5IMSbNIhh5h1DxYnnbVqqGKJSsJ8~VyrwRAHhOVzVwivFiHR9hvmaNtgzau1BUkgSog6j9b8JuCgCy-ychaFSYnlxkGCmA0gpdql-RNNG02T1Gm7jDzUNN6oGaMMd6Laf2dJZKJ4FUJPVJitB2TFw63aFljRdYB5IcQenEHieyKtJktwQSoI89bihtjUlH9cCR3Ldocv7mb2HC8w6jpIgO8LpRD9rZUkstCtQXrvMh9MLvJMEqsSXM8ZbhjODBmRQezRC0~PIdIUWz5LFMg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
'https://s3-alpha-sig.figma.com/img/d55b/1cb1/e432a6295442f1c55b108a703355721f?Expires=1578268800&Signature=gJF1AKi9iWO4A1-dB53W3uGcJWaFBACPGm5NyYVCD~RdYhdG70eKBLprwzW2r~Qz0hSE3OXXL~yOFceFyV0Dy8mnddcjQi6-nt6hS8JFP51kWeozkoezB0ZTkPHzD6yXNtSL8c7pYK1ReyxFsAERC~4pumzqq7VFnBNewPQySe83TJlp4isC1iTRwBUlZ-SwRTALdj-zrnyAm3~UUGGZgomiLp3CsdEixf3pApEwSINbpgopIC-A9Sx86Cf3Mhaw~2jQYVSahaAPYvS6nlaR6hTgYdDGxq2LXqev0aSVulEjn08hIEXf~LZfOXh9pMBSGDG9xEXzcFUUFZBeajpMTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
// 'https://s3-alpha-sig.figma.com/img/789a/7c4b/a00490984307b345b27c373277270b04?Expires=1578268800&Signature=dm-ln3Iidpnzx-3yP2HwK8Wf2dSKwcUmQt5s7kSifczrABpEwHZ2op3C4rTQ3m1raEqPwo-9luOPNm1jGPf8-5x0guIwQVHP2TBMipzmcnAKtHUSiEMSH~nDb08LPlMLw6eGpgx-t455zI-W7NJsD99UZmPZtpdQjpBiH9M5Wrr4QICW~anWhTzDbvDu8WjneaxIAmik22SdNru9myf02CQTMZEWiH95z7OZLvs-d7RndBCJBavEvVnxznEUJJTJUo6J4pE4cYNFPkPFtf7bwYslHqStgr0fYVFX6k9GKHk9eYU1ILhrvfkgPDy4CAjOZNYmo2kx1kBRbA2cjtmeGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
]


const Cards = (props) =>{
    return(
        <>
            <Row>

                {props.list.map(company => (
                    <Col className="mt-2" key={company.id_company}>
                        <div id="cardProfile">
                            <img src={img[Math.floor(Math.random() * img.length)]} alt="" id="cardImg"/>
                            <img src="https://dhggywfvre0o8.cloudfront.net/app/uploads/2017/11/22153252/Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg" alt="" id="black"/>
                        </div>
                            <div id="cardBody">
                                <h5>{company.name}</h5>
                                <p>{company.description}</p>
                                <p>{company.location}</p>
                                {/* <a href="/" className="btn btn-primary">Go to Profile</a> */}
                        </div>
                    </Col>
                ))}
            </Row>
            
        </>
    )
}

export default Cards 