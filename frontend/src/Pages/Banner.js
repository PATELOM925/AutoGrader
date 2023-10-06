import React from "react";
import './Banner.css'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavgBar from '../Components/NavgBar';
import About from "./About_p";
import Contact_us from "./Contact_us";
import Footer from "../Components/Footer";

function Banner(){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Serve as", "Train", "Play as " ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])

      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return(
        <React.Fragment>
        <NavgBar />
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className="tagline"></span> */}
                        {/* <h1>{`We`} <span className="wrap">{text}</span></h1> */}
                        <p className="mainline">EXAM PAPER CHECKER</p>
                        <button class="glow-on-hover" type="button">Let's Connect!</button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header Img"/> */}
                    </Col>
                </Row>
            </Container>    
        </section>
        <About />
        <Contact_us />
        <Footer />
      </React.Fragment>
      
    )
}

export default Banner;
