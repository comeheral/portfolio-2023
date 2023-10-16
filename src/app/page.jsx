// Server components and Client components : https://nextjs.org/docs/getting-started/react-essentials
'use client'

import { useState, useEffect } from 'react';
import SectionHero from '@/components/SectionHero';

// API URL : https://api.comeheral.fr
// API token : ZXiSO4Tx1LEHwLHhEI6nTieuRtVurQVP

function HomePage(){
  const [sections, setSections] = useState([]);

  async function fetchSections(){
    let response = await fetch('https://api.comeheral.fr/items/homepage?fields=sections.collection,sections.id,sections.item.*,sections.item.*.item.*', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ZXiSO4Tx1LEHwLHhEI6nTieuRtVurQVP'
      }
    });

    if(response.ok){
      let json = await response.json();
      let data = json.data;
      setSections(data.sections);
    }else{
      console.error('An error occurred : ' + response.statusText);
    }
  }

  useEffect(() => {
    fetchSections()
  }, [])

  return (
    <main>
      {
        sections.map((section, index) => {
          switch(section.collection){
            case 'section_hero' :
              return <SectionHero key={section.id} title={section.item.heading} text={section.item.text} buttons={section.item.buttons} />
            default :
              return null
          }
        })
      }
      {/*<SectionHero 
        title="Hello, I'm Côme !" 
        text="E-commerce specialized front-end developer, I love to build awesome user experiences. Currently working at Lugus, I lead a developers’ team in order to build e-commerce stores on Shopify." 
        buttons={buttons}
    />*/}
    </main>
  )
}

export default HomePage;