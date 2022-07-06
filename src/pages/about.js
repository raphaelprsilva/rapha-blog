import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/seo';

import { MainContent } from '../styles/base';

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <MainContent>
        <h1>Sobre mim</h1>
        <p>
          Meu nome é Raphael Pereira Silva, mineiro 🔺, natural de Uberlândia.
          Sou da geração Y ou{' '}
          <a
            href="https://pt.wikipedia.org/wiki/Gera%C3%A7%C3%A3o_Y"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Milenials
          </a>
          , assim dá para ter uma ideia da minha idade. 😂
        </p>
        <p>
          Desde criança, sempre fui muito curiso, gostava de fuçar e desmontar
          brinquedos e entender o porquê das coisas serem como eram. Em certo
          momento, comecei a fazer um curso técnico em eletrônica, mas logo
          desisti, pois havia realizado um sonho, havia passado para o curso de
          engenharia mecânica.
        </p>
        <p>
          Logo, me formei engenheiro mecânico pela <strong>UFU</strong>{' '}
          (Universidade Federal de Uberlândia) tendo trabalhado em empresas
          como, <strong>Anglo Gold Ashanti</strong>,{' '}
          <strong>Yara International</strong> e <strong>Usina Batatais</strong>.
        </p>
        <p>
          Em 2021, em plena pandemia, resolvi que deveria seguir por novas
          direções, ou seja, passei buscar uma transição de carreira. Mas a
          decisão não foi aleatória. Eu trabalhava bastante com{' '}
          <strong>VBA</strong> (Excel), <strong>Power Apps (Microsoft)</strong>{' '}
          e <strong>SAP</strong>, ou seja, eu já trabalhava com programação.
        </p>
        <p>
          Então, esse acabou sendo um caminho natural como escolha. Sendo assim,
          esoclhi uma escola para estudar: a{' '}
          <a
            href="https://www.betrybe.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trybe
          </a>
          . E desde então, estou estudando, tecnologias/linguagens como:
          <ul>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Docker</li>
          </ul>
        </p>
        <p>
          Adoro trabalhar em equipe, sou bastante esforçado em tudo o que faço e
          procuro dar sempre o melhor de mim.
        </p>
        <p>
          Sinta-se à vontade para entrar em contato comigo para trocarmos uma
          ideia!
        </p>
      </MainContent>
    </Layout>
  );
};

export default AboutPage;
