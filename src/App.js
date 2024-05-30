import './App.css';
import './media.css';
import Main from './components/Main';
import Card from './components/Card/Card';
import InfoCard from './components/InfoCard/InfoCard';
import Footer from './components/Footer/Footer';
import ContactInfoCard from './components/Contact/Contact';
import PricingComponent from './components/PricingComponent/PricingComponent';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App" id="home">
      <Main
        mainImg="../assets/logo.png"
      />
      <h2 className="title-cards">Principais Módulos do Curso:</h2>
      <div className="group-cards">
        <Card
          imgCard="../assets/1.png"
          title="Explorando as Profundezas da Mente"
          subtitle="Compreendendo as Bases Neurológicas do Comportamento Humano"
        />
        <Card
          imgCard="../assets/2.png"
          title="Explorando o Inconsciente"
          subtitle="Investigando os Detalhes que Moldam a Personalidadee"
        />
        <Card
          imgCard="../assets/3.png"
          title="Análise Detalhada da Mente"
          subtitle="Investigando os Detalhes que Moldam a Personalidade"
        />
        <Card
          imgCard="../assets/4.png"
          title="Clareando a Mente Turbulenta"
          subtitle="Navegando pelos Labirintos da Mente em Busca de Clareza"
        />
      </div>
      <InfoCard
          imageSrc="../assets/5.png"
          title="LIDERANÇA & RELAÇÕES HUMANAS COM PSICANÁLISE INSTITUCIONAL"
          text1="Nosso curso de Liderança & Relações Humanas com Psicanálise Institucional é uma jornada transformadora de aprendizado. Em dois meses e com 200 horas, exploraremos princípios essenciais de liderança, comunicação interpessoal e compreensão psicológica, capacitando-o para liderar e interagir de forma mais eficaz em todas as áreas da vida."
          text2="No curso, os alunos aprenderão a liderar grupos e equipes, cumprindo normas e regulamentos, e aplicarão técnicas psicanalíticas para melhorar as interações interpessoais. Conceitos como escuta ativa, comunicação não verbal e distribuição de responsabilidades serão explorados para promover uma cultura de colaboração e respeito mútuo."
          text3="Ao final do curso, os participantes estarão aptos a liderar equipes de forma eficaz, promovendo relações interpessoais saudáveis, resolvendo conflitos de maneira construtiva e fomentando um ambiente de trabalho positivo e produtivo."
      />
      <PricingComponent/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
