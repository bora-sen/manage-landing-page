import * as Section from './Sections'

function HomePage() {
  return (
    <Section.Layout>
      <Section.Hero />
      <Section.Explain />
      <Section.WhatTheySay />
      <Section.Band />
    </Section.Layout>
  );
}

export default HomePage;
