import { Box } from '@mui/material';
import {
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  CtaSection,
  Footer
} from '../features/landing-page/components';

export default function LandingPage() {
  return (
    <Box>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </Box>
  );
}
