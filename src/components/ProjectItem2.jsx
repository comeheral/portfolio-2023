// Server components and Client components : https://nextjs.org/docs/getting-started/react-essentials
'use client'

import { useState, useEffect, useRef } from 'react';

import Heading2 from '@/components/Heading2';
import Icon2 from '@/components/Icon2';
import TagList2 from '@/components/TagList2';
import Text2 from '@/components/Text2';

function ProjectItem2({ name, tags, text, link, image}){
  const [isHovered, setIsHovered] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(null);

  const detailsElement = useRef();

  useEffect(() => {
    setDetailsHeight(detailsElement.current.offsetHeight);
  }, [isHovered])

  return (
    <a className="relative rounded-xl overflow-hidden aspect-square flex items-end cursor-pointer" href={link} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <img className="absolute inset-0 object-cover z-[-1]" src={image} alt="" />
      <div className="p-6 w-full relative transition-transform duration-300" style={{ transform: isHovered ? `translateY(-${detailsHeight}px)` : `translateY(0px)` }}>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black opacity-80 transition-all duration-300" style={{ transform: isHovered ? `translateY(${detailsHeight}px)` : `translateY(0px)`, top: isHovered ? `calc(-24px - ${detailsHeight}px)` : `-24px` }}></div>
        <div className="flex items-center justify-between transition-transform duration-300">
          <Heading2 as="h3" size="sm" color="white">{name}</Heading2>
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shrink-0 ml-3">
            <Icon2 icon="arrow-right" width="16px" />
          </div>
        </div>

        <div className="pt-3 absolute w-[calc(100%-48px)] transition-opacity durantion-300" ref={detailsElement} style={{ opacity: isHovered ? "1" : "0" }}>
          {tags !== undefined ? <TagList2 tags={tags} className="mb-4" /> : null}
          <Text2 size="sm" color="white">{text}</Text2>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem2; 