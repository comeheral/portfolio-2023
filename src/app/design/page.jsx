import Heading from '@/components/Heading';

export default function DesignSystem() {
  return (
    <main className="page-width">
      <Heading as="h1" size="lg">Titre de niveau 1</Heading>
      <Heading as="h2" size="md">Titre de niveau 2</Heading>
      <Heading as="h3" size="sm">Titre de niveau 3</Heading>
    </main>
  )
}
