import SeoPage, { buildMetadata } from '../SeoPage';
import { pages } from '../seoContent';

export const metadata = buildMetadata(pages.kubernetesConsulting);

export default function KubernetesConsultingPage() {
  return <SeoPage page={pages.kubernetesConsulting} />;
}
