import Heading from '@/components/Heading';
import Icon from '@/components/Icon';
import TagList from '@/components/TagList';
import Text from '@/components/Text';

import '@/styles/components/ProjectItem.scss'

function ProjectItem({ name, tags, text, link, image}){
  return (
    <a className="project-item" href={link}>
      <img className="project-item__image" src={image} alt="" />
      <div className="project-item__content">
        <div className="project-item__overlay"></div>
        <div className="project-item__heading-container">
          <Heading className="project-item__heading" as="h3" size="sm" color="white">{name}</Heading>
          <div className="project-item__arrow">
            <Icon icon="arrow-right" width="16px"></Icon>
          </div>
        </div>

        <div className="project-item__details">
          {tags != undefined ? <TagList tags={tags} className="project-item__tags" /> : null}
          <Text size="sm" color="white">{text}</Text>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem; 