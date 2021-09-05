import { Navbar } from '@/components/Navbar/index';
import { Footer } from '@/components/Footer';

interface props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: props) => {
  return (
    <div className="antialiased min-h-screen flex flex-col relative">
      <Navbar />
      <div className="flex-1 mt-14">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
