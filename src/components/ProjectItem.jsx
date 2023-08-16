import Heading from '@/components/Heading';
import Icon from '@/components/Icon';
import TagList from '@/components/TagList';
import Text from '@/components/Text';
import '@/styles/components/ProjectItem.scss'

function ProjectItem(){
  const projectTags = ['e-commerce', 'shopify'];

  return (
    <div className="project-item">
      <img className="project-item__image" src="https://picsum.photos/800" alt="" />
      <div className="project-item__content">
        <div className="project-item__overlay"></div>
        <div className="project-item__heading-container">
          <Heading className="project-item__heading" as="h3" size="sm" color="white">First project</Heading>
          <div className="project-item__arrow">
            <Icon icon="arrow-right" width="16px"></Icon>
          </div>
        </div>

        <div className="project-item__details">
          <TagList tags={projectTags} className="project-item__tags" />
          <Text size="sm" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>
      </div>
    </div>
  )
}

export default ProjectItem; 