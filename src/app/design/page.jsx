import Heading from '@/components/Heading';
import Text from '@/components/Text';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import ProjectItem from '@/components/ProjectItem';

export default function DesignSystem() {
  const projectTags = ['e-commerce', 'shopify'];

  return (
    <main className="my-14 px-[32px] max-w-[500px] md:max-w-[1192px] mx-auto">
      <Heading className="mb-5" as="h1" size="lg">Titre de niveau 1</Heading>
      <Heading className="mb-5" as="h2" size="md">Titre de niveau 2</Heading>
      <Heading className="mb-5" as="h3" size="sm">Titre de niveau 3</Heading>

      <Text className="mb-5" size="lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      <Text className="mb-5" size="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      <Text className="mb-5" size="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>

      <Button className="mr-5 mb-5" link="/">Primary button</Button>
      <Button className="mr-5 mb-5" link="/" variant="outline">Secondary button</Button>
      <Button className="mr-5 mb-5" link="/" size="small" icon="arrow-right">Small button</Button>

      <div className="flex gap-2 mb-5">
        <Icon icon="design" width="80px" />
        <Icon icon="development" width="80px" />
        <Icon icon="e-commerce" width="80px" />
      </div>

      <div className="gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        <ProjectItem 
          name="First project" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          image="https://picsum.photos/800"
          tags={projectTags} 
          link="/" />
      </div>
    </main>
  )
}
