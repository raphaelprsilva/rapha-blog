import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import { MainContent } from '../styles/base';
import { vanillaJavascript } from '../utils/portfolio';

import Accordion from '../components/Accordion';

const Portfolio = () => {
  return (
    <Layout>
      <Seo title="Portfolio" />
      <MainContent>
        <h1>Portfólio</h1>
        <p>
          Aqui, estão concentrados os projetos pessoais desenvolvidos por mim
          durante o curso da Trybe e nas horas vagas.
        </p>
        <section>
          <h2>Projetos usando apenas HTML, CSS e Javascript</h2>
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
      </MainContent>
    </Layout>
  );
};

export default Portfolio;
