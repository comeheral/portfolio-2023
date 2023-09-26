import SectionHero from '@/components/SectionHero';

function HomePage(){
  const buttons = [
    {
      "label": "See my work",
      "link": "/work"
    }
  ]

  return (
    <main>
      <SectionHero 
        title="Hello, I'm Côme !" 
        text="E-commerce specialized front-end developer, I love to build awesome user experiences. Currently working at Lugus, I lead a developers’ team in order to build e-commerce stores on Shopify." 
        buttons={buttons} 
      />
    </main>
  )
}

export default HomePage;