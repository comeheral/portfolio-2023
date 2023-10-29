import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

{/* TODO : Use Swiper with Vanilla JS to handle mobile initialization only */}

function SectionFeatures({ features }){
  return (
    <section className="py-20 bg-white lg:bg-pastelblue">
    <Container>
      <Swiper 
        slidesPerView={'auto'} 
        spaceBetween={20} 
        centeredSlides={true} 
        centeredSlidesBounds={true}
      >
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => (
            <SwiperSlide className="!w-auto !h-auto self-stretch" key={`feature-${index}}`}>
              <div className="text-center bg-pastelblue w-60 py-10 px-4 rounded-xl h-full lg:p-0 lg:w-auto">
                <div className="bg-white w-fit m-auto p-4 rounded-3xl mb-6">
                  <Icon icon={feature.icon} width="50px" />
                </div>
                <Heading className="mb-2" as="h3" size="sm">{feature.heading}</Heading>
                <Text size="md">{feature.text}</Text>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </Container>
    </section>
  )
}

export default SectionFeatures;