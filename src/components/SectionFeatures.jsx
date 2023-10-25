import Container from '@/components/Container';
import Icon from '@/components/Icon';
import Heading from '@/components/Heading';
import Text from '@/components/Text';

function SectionFeatures({ bgColor, features }){
  return (
    <section className="py-20 bg-white lg:bg-pastelblue">
      <Container>
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => (
            <div className="text-center bg-pastelblue">
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
}

export default SectionFeatures;