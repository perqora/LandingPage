import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.terraformAutomation);

export default function TerraformAutomationPage() {
  return <SeoPage page={pages.terraformAutomation} />;
}
