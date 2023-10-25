// Server components and Client components : https://nextjs.org/docs/getting-started/react-essentials
'use client'

import { useState, useEffect } from 'react';
import SectionHero from '@/components/SectionHero';
import SectionFeatures from '@/components/SectionFeatures';

// API URL : https://api.comeheral.fr
// API token : ZXiSO4Tx1LEHwLHhEI6nTieuRtVurQVP

function HomePage(){
  const [sections, setSections] = useState([]);

  async function fetchSections(){
    let response = await fetch('https://api.comeheral.fr/items/homepage?fields=sections.collection,sections.id,sections.item.*,sections.item.buttons.item.*,sections.item.image.*', {
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
        sections.map((section) => {
          switch(section.collection){
            case 'section_hero' :
              const imageUrl = 'https://api.comeheral.fr/' + 'assets/' + section.item.image.id;
              return <SectionHero 
                        key={section.id} 
                        title={section.item.heading} 
                        text={section.item.text} 
                        buttons={section.item.buttons} 
                        image={{ url: imageUrl, height: section.item.image.height, width: section.item.image.width, alt: section.item.image.title }} 
                      />
              case 'section_features' :
                return <SectionFeatures
                          key={section.id} 
                          bgColor={section.item.background_color} 
                          features={section.item.features}
                        />
            default :
              return null
          }
        })
      }
    </main>
  )
}

export default HomePage;