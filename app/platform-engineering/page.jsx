import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.platformEngineering);

export default function PlatformEngineeringPage() {
  return <SeoPage page={pages.platformEngineering} />;
}
