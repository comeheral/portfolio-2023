// Server components and Client components : https://nextjs.org/docs/getting-started/react-essentials
'use client'

import { useState, useEffect, useRef } from 'react';

import Heading from '@/components/Heading';
import Icon from '@/components/Icon';
import TagList from '@/components/TagList';
import Text from '@/components/Text';

import '@/styles/components/ProjectItem.scss';

function ProjectItem({ name, tags, text, link, image}){
  const [isHovered, setIsHovered] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(null);

  const detailsElement = useRef();

  useEffect(() => {
    setDetailsHeight(detailsElement.current.offsetHeight);
  }, [isHovered])

  return (
    <a className="project-item" href={link} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img className="project-item__image" src={image} alt="" />
      <div className="project-item__content" style={{ transform: isHovered ? `translateY(-${detailsHeight}px)` : `translateY(0px)` }}>
        <div className="project-item__overlay" style={{ transform: isHovered ? `translateY(${detailsHeight}px)` : `translateY(0px)`, top: isHovered ? `calc(-24px - ${detailsHeight}px)` : `-24px` }}></div>
        <div className="project-item__heading-container">
          <Heading className="project-item__heading" as="h3" size="sm" color="white">{name}</Heading>
          <div className="project-item__arrow">
            <Icon icon="arrow-right" width="16px"></Icon>
          </div>
        </div>

        <div className="project-item__details" ref={detailsElement} style={{ opacity: isHovered ? "1" : "0" }}>
          {tags !== undefined ? <TagList tags={tags} className="project-item__tags" /> : null}
          <Text size="sm" color="white">{text}</Text>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem; 