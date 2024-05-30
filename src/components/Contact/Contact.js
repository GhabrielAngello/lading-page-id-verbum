import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contato-container" id="contact">
      <div className='contato-group'>
        <div className="contato-item">
          <FontAwesomeIcon icon={faPhone} className="icone" />
          <p className="info">(13) 98160-3342</p>
        </div>
        <div className="contato-item">
          <FontAwesomeIcon icon={faEnvelope} className="icone" />
          <p className="info">id_verbum@gmail.com</p>
        </div>
        <div className="contato-item">
          <FontAwesomeIcon icon={faInstagram} className="icone" />
          <p className="info">@Id_verbum</p>
        </div>
      </div>  
    </div>
  );
}

export default Contact;
