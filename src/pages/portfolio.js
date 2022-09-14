import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { MainContent } from '../styles/base';
import { vanillaJavascript, reactProjects } from '../utils/portfolio';

import Accordion from '../components/Accordion';

const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <MainContent>
        <h1>Portfólio (⚠ em construção)</h1>
        <p>
          Aqui, estão concentrados os projetos pessoais desenvolvidos por mim
          durante o curso da Trybe e nas horas vagas.
        </p>
        <p>Os projetos estão listados pelas seguintes categorias:</p>
        <ul>
          <li>
            <a href="#html-css-js">HTML, CSS e Javascript</a>
          </li>
          <li>
            <a href="#react">Front-end (React)</a>
          </li>
          <li>Testes</li>
          <li>Banco de Dados</li>
          <li>Backend (Node.js e Typescript)</li>
        </ul>
        <section>
          <h3 id="html-css-js">
            Projetos usando apenas HTML, CSS e Javascript
          </h3>
          <div>
            {vanillaJavascript.map(
              ({ projectName, projectDescription, siteLink, githubLink }) => (
                <Accordion
                  key={projectName}
                  projectName={projectName}
                  projectDescription={projectDescription}
                  projectSiteLink={siteLink}
                  githubLink={githubLink}
                />
              )
            )}
          </div>
        </section>
        <section>
          <h3 id="react">Front-end (React)</h3>
          <div>
            {reactProjects.map(
              ({ projectName, projectDescription, siteLink, githubLink }) => (
                <Accordion
                  key={projectName}
                  projectName={projectName}
                  projectDescription={projectDescription}
                  projectSiteLink={siteLink}
                  githubLink={githubLink}
                />
              )
            )}
          </div>
        </section>
      </MainContent>
    </Layout>
  );
};

export default Portfolio;
