import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.cloudMigration);

export default function CloudMigrationPage() {
  return <SeoPage page={pages.cloudMigration} />;
}
