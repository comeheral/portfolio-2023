// Server components and Client components : https://nextjs.org/docs/getting-started/react-essentials
'use client'

import { useState, useEffect } from 'react';
import SectionHero from '@/components/SectionHero';
import SectionFeatures from '@/components/SectionFeatures';

import fetchData from '@/utils/fetchData.js';

function HomePage(){
  const [sections, setSections] = useState([]);

  async function fetchSections(){
    let response = await fetchData('/items/homepage?fields=sections.collection,sections.id,sections.item.*,sections.item.buttons.item.*,sections.item.image.*');

    if(response.ok){
      let json = await response.json();
      let data = json.data;
      setSections(data.sections);
    }
  }

  useEffect(() => {
    fetchSections()
  }, [])

  return (
    <main className="pb-20">
      {
        sections.map((section) => {
          switch(section.collection){
            case 'section_hero' :
              const imageUrl = process.env.NEXT_PUBLIC_API_URL + '/assets/' + section.item.image.id;
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