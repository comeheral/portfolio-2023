/* import SectionHero from '@/components/SectionHero'; */
import Image from 'next/image';
import gradientLogo from '@/assets/big-gradient-logo.png';

// Animation : animate-[spin_200s_linear_infinite]

function HomePage(){
  /* const buttons = [
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
  ) */

  return(
    <main className="flex justify-center items-center h-full">
      <h1 className="text-4xl font-heading">Coming soon</h1>
      <Image className="fixed -rotate-[30deg] scale-125 h-full w-auto max-w-none" src={gradientLogo} alt="Gradient logo"/>
    </main>
  )
}

export default HomePage;