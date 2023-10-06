import React from 'react';
import '../Components/box.css'
import './Contact_us.css'

function Contact_us() {

    const myStyle = {
        marginTop: '1800px',
        padding: 0
      };

  return (
    <div className="purple-box-container" style={myStyle}>
        <div style={{backgroundImage: `url('../Assets/Img/contact_us.jpeg')`}}>
        <div className="contact-container">
            <div>
                <form method="POST" className="contact-form-container">
                <h1>Reach out to us!</h1>
                <div>
                    {/* <img src={userIcon} alt="user" className="c-form-icon" /> */}
                    <input className="c-form-input" type="text" id="c-form-name" autoComplete="on" required placeholder="Name"/>
                </div>

                <div>
                    {/* <img src={mailIcon} alt="email" className="c-form-icon" /> */}
                    <input className="c-form-input" type="email" id="c-form-mail" autoComplete="on" required placeholder="Mail" />
                </div>

                <div>
                    <h4>Type Your Message Here...</h4>
                    {/* <img src={phoneIcon} alt="msg" className="c-form-icon" /> */}
                    <textarea required defaultValue={""} />
                    {/* <input className="c-form-input" type="text" id="c-form-query" autoComplete="on" required placeholder="Message"/> */}
                </div>

                <button className="contact-form-button">Send!</button>
                </form>
            </div>

        {/* <div>
            <h1>Other ways to meet us!</h1>

            <a href="#">
            <img className="contact-logo" src={instIcon} id="instagram-logo" alt="Instagram"/>
            </a>

            <a href="mailto: cdhwani03@gmail.com">
            <img className="contact-logo" src={mailIcon} id="mail-logo" alt="Email"/>
            </a>

            <a href="tel:+108">
            <img className="contact-logo" src={phoneIcon} id="phone-logo" alt="Phone"/>
            </a>
        </div> */}
        </div>
        </div>
    </div>

  );
}

export default Contact_us;