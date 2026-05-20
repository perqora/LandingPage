import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.services);

export default function ServicesPage() {
  return <SeoPage page={pages.services} />;
}
