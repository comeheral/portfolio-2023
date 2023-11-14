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
        <div className="flex justify-between">
          <Heading as="h1" size="lg">Derniers projets</Heading>
          <Button className="hidden md:inline-flex" size="small" icon="arrow-right" link="/">Voir tous</Button>
        </div>
        
        <ProjectList projects={projects} />

        <Button className="md:hidden" size="small" icon="arrow-right" link="/">Voir tous</Button>
      </Container>
    </section>
  )
}

export default SectionProjects;