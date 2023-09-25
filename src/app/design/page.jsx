import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import ProjectItem from '@/components/ProjectItem';

import '@/styles/pages/design.scss';

export default function DesignSystem() {
  const projectTags = ['e-commerce', 'shopify'];

  return (
    <main className="page-width">
      {/* <Heading as="h1" size="lg">Titre de niveau 1</Heading>
      <Heading as="h2" size="md">Titre de niveau 2</Heading>
      <Heading as="h3" size="sm">Titre de niveau 3</Heading>

      <Text size="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      <Text size="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      <Text size="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

      <Button link="/">Primary button</Button>
      <Button link="/" variant="outline">Secondary button</Button>
      <Button link="/" size="small" icon="arrow-right">Small button</Button>

      <div className="icons-container">
        <Icon icon="design" width="80px" />
        <Icon icon="development" width="80px" />
        <Icon icon="e-commerce" width="80px" />
      </div>

      <div className="projects-container">
        <ProjectItem 
          name="First project" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          image="https://picsum.photos/800"
          tags={projectTags} 
          link="/" />
      </div> */}
    </main>
  )
}
