'use client'

import { useState, useEffect } from 'react';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import ProjectList from '@/components/ProjectList';

import fetchData from '@/utils/fetchData';

function SectionProjects(){
  const [projects, setProjects] = useState([]);

  async function fetchProjects(){
    let response = await fetchData('/items/projects?fields=status,name,short_description,tags,grid_image.*&sort=-date&limit=6');

    if(response.ok){
      let json = await response.json();
      let data = json.data;
      setProjects(data);
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <section className="my-36">
      <Container>
        <div className="md:flex md:justify-between mb-10">
          <Heading className="text-center" as="h1" size="lg">Derniers projets</Heading>
          <Button className="hidden md:inline-flex" size="small" icon="arrow-right" link="/">Voir tous</Button>
        </div>
        
        <ProjectList projects={projects} />

        <div className="text-center mt-8 md:hidden">
          <Button size="small" icon="arrow-right" link="/">Voir tous</Button>
        </div>
      </Container>
    </section>
  )
}

export default SectionProjects;