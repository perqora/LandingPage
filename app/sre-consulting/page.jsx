import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.sreConsulting);

export default function SreConsultingPage() {
  return <SeoPage page={pages.sreConsulting} />;
}
