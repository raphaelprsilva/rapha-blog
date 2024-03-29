import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { MainContent } from '../styles/base';
import {
  vanillaJavascript,
  reactProjects,
  backEndProjects,
  databasesProjects,
} from '../utils/portfolio';

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
            <a href="#react">Front-end (React, RTL)</a>
          </li>
          <li>
            <a href="#databases">Banco de Dados (MySQL e MongoDB)</a>
          </li>
          <li href="#back-end">
            <a href="#back-end">Back-end (Docker, Node.js e Typescript)</a>
          </li>
          <li>Testes</li>
        </ul>
        <section>
          <h3 id="html-css-js">
            Projetos usando apenas HTML, CSS e Javascript
          </h3>
          <div>
            {vanillaJavascript.map(
              ({
                projectName,
                projectDescription,
                siteLink,
                githubLink,
                stacks,
              }) => (
                <Accordion
                  key={projectName}
                  projectName={projectName}
                  stacks={stacks}
                  projectDescription={projectDescription}
                  projectSiteLink={siteLink}
                  githubLink={githubLink}
                />
              )
            )}
          </div>
        </section>
        <section>
          <h3 id="react">Front-end (React, RTL)</h3>
          <div>
            {reactProjects.map(
              ({
                projectName,
                projectDescription,
                siteLink,
                githubLink,
                stacks,
              }) => (
                <Accordion
                  key={projectName}
                  projectName={projectName}
                  stacks={stacks}
                  projectDescription={projectDescription}
                  projectSiteLink={siteLink}
                  githubLink={githubLink}
                />
              )
            )}
          </div>
          <div>
            <h3 id="databases">Banco de Dados (MySQL e MongoDB)</h3>
            {databasesProjects.map(
              ({
                projectName,
                projectDescription,
                siteLink,
                githubLink,
                stacks,
              }) => (
                <Accordion
                  key={projectName}
                  projectName={projectName}
                  stacks={stacks}
                  projectDescription={projectDescription}
                  projectSiteLink={siteLink}
                  githubLink={githubLink}
                />
              )
            )}
          </div>
          <div>
            <h3 id="back-end">Back-end (Docker, Node.js e Typescript)</h3>
            {backEndProjects.map(
              ({
                projectName,
                projectDescription,
                siteLink,
                githubLink,
                stacks,
              }) => (
                <Accordion
                  key={projectName}
                  projectName={projectName}
                  stacks={stacks}
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
