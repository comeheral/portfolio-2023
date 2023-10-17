import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Button from '@/components/Button';

function SectionHero({ title, text, buttons = [] }){
  return (
    <section className="h-screen md:flex md:items-center">
      <Container>
        <div className="md:w-1/2">
          <Heading className="mb-4 md:mb-8" as="h1" size="lg">{title}</Heading>
          <Text className="mb-8 md:mb-10 [&>p]:mb-5" size="lg" richText={true}>{text}</Text>
          {
            buttons.map((button, index) => <Button className="mr-5 last:mr-0" key={`button-${index}`} link={button.item.link} variant={button.item.variant} size={button.item.size}>{button.item.label}</Button>)
          }
        </div>
      </Container>
    </section>
  )
}

export default SectionHero;