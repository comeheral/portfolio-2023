import Heading from '@/components/Heading';
import Icon from '@/components/Icon';
import TagList from '@/components/TagList';
import Text from '@/components/Text';

function ProjectItem(){
  const projectTags = ['e-commerce', 'shopify'];

  return (
    <div className="project">
      <img className="project__image" src="https://picsum.photos/800" alt="" />
      <div className="project__content">
        <div className="project__heading-container">
          <Heading className="project__heading" as="h3" size="sm">First project</Heading>
          <div className="project__arrow">
            <Icon icon="arrow-right"></Icon>
          </div>
        </div>

        <div className="project__details">
          <TagList tags={projectTags} />
          <Text size="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem; 