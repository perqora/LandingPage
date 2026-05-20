import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.cloudCostOptimization);

export default function CloudCostOptimizationPage() {
  return <SeoPage page={pages.cloudCostOptimization} />;
}
