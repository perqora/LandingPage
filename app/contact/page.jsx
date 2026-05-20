import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.contact);

export default function ContactPage() {
  return <SeoPage page={pages.contact} />;
}
