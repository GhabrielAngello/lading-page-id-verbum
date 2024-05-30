import React from 'react';
import './PricingComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const PricingComponent = () => {
  return (
    <div className="pricing-container">
      <div className="pricing-features">
        <ul>
          <li><FontAwesomeIcon icon={faCheck} /> Conteúdo Abrangente e Atualizado</li>
          <li><FontAwesomeIcon icon={faCheck} /> Suporte Personalizado</li>
          <li><FontAwesomeIcon icon={faCheck} /> Certificação Reconhecida</li>
          <li><FontAwesomeIcon icon={faCheck} /> Aulas ao vivo</li>
          <li><FontAwesomeIcon icon={faCheck} /> Flexibilidade de Aprendizado</li>
        </ul>
      </div>
      <div className="line-divider"></div>
      <div className="pricing-details">
        <div className="price">R$ 249,99</div>
        <div className="price-per">/mês</div>
        <button className="get-started-btn">Comprar agora</button>
      </div>
    </div>
  );
};

export default PricingComponent;
