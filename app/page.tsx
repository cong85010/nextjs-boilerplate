import Header from '@/components/header';
import Home from '@/components/home';
import Footer from '@/components/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
