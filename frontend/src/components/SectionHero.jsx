import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Button from '@/components/Button';

function SectionHero({ title, text, buttons = [] }){
  return (
    <section className="page-width">
      <Heading as="h1" size="lg">{title}</Heading>
      <Text size="lg">{text}</Text>
      {
        buttons.map((button) => <Button link={button.link}>{button.label}</Button>)
      }
    </section>
  )
}

export default SectionHero;