import Card from './Card';
import PageContainer from './PageContainer';
import SectionTitle from './SectionTitle';

export default function PlaceholderPage({ title, description }) {
  return (
    <PageContainer>
      <SectionTitle title={title} description={description} />

      <Card className="flex min-h-[240px] items-center justify-center">
        <p className="text-sm font-medium tracking-wide text-text-secondary uppercase">
          Coming Soon
        </p>
      </Card>
    </PageContainer>
  );
}
