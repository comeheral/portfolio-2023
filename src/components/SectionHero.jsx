import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Image from 'next/image';

function SectionHero({ title, text, buttons = [], image }){
  return (
    <section className="min-h-screen my-8 md:flex md:items-center md:my-0">
      <Image className="w-full ml-auto pl-[32px] md:absolute md:right-0 md:w-[45%] md:m-0 md:p-0" src={image.url} width={image.width} height={image.height} alt={image.alt} />
      <Container>
        <div className="mt-14 md:w-1/2 md:mt-0">
          <Heading className="mb-4 md:mb-8" as="h1" size="lg">{title}</Heading>
          <Text className="mb-8 md:mb-10 [&>p]:mb-5" size="lg" richText={true}>{text}</Text>
          {
            buttons.map((button, index) => <Button className="mb-5 mr-5 last:mr-0" key={`button-${index}`} link={button.item.link} variant={button.item.variant} size={button.item.size}>{button.item.label}</Button>)
          }
        </div>
      </Container>
    </section>
  )
}

export default SectionHero;