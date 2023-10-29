import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive'

import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

{/* TODO : Use Swiper with Vanilla JS to handle mobile initialization only */}

function SectionFeatures({ features }){
  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  if(isDesktop){
    return (
      <section className="py-20 bg-pastelblue">
        <Container>
            <div className="grid grid-cols-3 gap-6">
              {features.map((feature, index) => (
                  <div className="text-center bg-pastelblue rounded-xl h-full" key={`feature-${index}}`}>
                    <div className="bg-white w-fit m-auto p-4 rounded-3xl mb-6">
                      <Icon icon={feature.icon} width="50px" />
                    </div>
                    <Heading className="mb-2" as="h3" size="sm">{feature.heading}</Heading>
                    <Text size="md">{feature.text}</Text>
                  </div>
              ))}
            </div>
        </Container>
      </section>
    )
  }else{
    return (
      <section>
        <Swiper 
          slidesPerView={'auto'} 
          spaceBetween={20} 
          centeredSlides={true} 
          centeredSlidesBounds={true} 
        >
          {features.map((feature, index) => (
            <SwiperSlide className="!w-auto !h-auto self-stretch [&:first-child]:ml-[32px] [&:last-child]:mr-[32px]" key={`feature-${index}}`}>
              <div className="text-center bg-pastelblue w-60 py-10 px-4 rounded-xl h-full md:w-96">
                <div className="bg-white w-fit m-auto p-3 rounded-2xl mb-6">
                  <Icon icon={feature.icon} width="40px" />
                </div>
                <Heading className="mb-2" as="h3" size="sm">{feature.heading}</Heading>
                <Text size="md">{feature.text}</Text>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }
}

export default SectionFeatures;