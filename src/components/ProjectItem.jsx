// Server components and Client components : https://nextjs.org/docs/getting-started/react-essentials
'use client'

import { useState, useEffect, useRef } from 'react';

import Heading from '@/components/Heading';
import Icon from '@/components/Icon';
import TagList from '@/components/TagList';
import Text from '@/components/Text';
import Image from 'next/image';

function ProjectItem({ name, tags, text, link, image, className}){
  const [isHovered, setIsHovered] = useState(false);
  const [detailsHeight, setDetailsHeight] = useState(null);

  const detailsElement = useRef();

  useEffect(() => {
    setDetailsHeight(detailsElement.current.offsetHeight);
  }, [isHovered])

  return (
    <a className={`relative rounded-xl overflow-hidden aspect-square flex items-end cursor-pointer ${className}`} href={link} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Image className="absolute inset-0 object-cover w-full z-[-1]" src={image.url} width={image.width} height={image.height} alt={image.alt} />
      <div className="p-6 w-full relative transition-transform duration-300" style={{ transform: isHovered ? `translateY(-${detailsHeight}px)` : `translateY(0px)` }}>
        <div className="absolute inset-0 z-[-1] bg-gradient-to-t from-black opacity-80 transition-all duration-300" style={{ transform: isHovered ? `translateY(${detailsHeight}px)` : `translateY(0px)`, top: isHovered ? `calc(-24px - ${detailsHeight}px)` : `-24px` }}></div>
        <div className="flex items-center justify-between transition-transform duration-300">
          <Heading as="h3" size="sm" color="white">{name}</Heading>
          <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shrink-0 ml-3">
            <Icon icon="arrow-right" width="16px" />
          </div>
        </div>

        <div className="pt-3 absolute w-[calc(100%-48px)] transition-opacity durantion-300" ref={detailsElement} style={{ opacity: isHovered ? "1" : "0" }}>
          {tags !== undefined ? <TagList tags={tags} className="mb-4" /> : null}
          <Text size="sm" color="white">{text}</Text>
        </div>
      </div>
    </a>
  )
}

export default ProjectItem; 