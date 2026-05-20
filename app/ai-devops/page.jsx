import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.aiDevops);

export default function AiDevopsPage() {
  return <SeoPage page={pages.aiDevops} />;
}
