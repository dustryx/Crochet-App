import CrochetHeader from "@/components/CrochetHeader";
import CrochetHero from "@/components/CrochetHero";
import NewArrivals from "@/components/NewArrivals";
import CatalogueSection from "@/components/CatalogueSection";
import BookingForm from "@/components/BookingForm";
import CrochetFooter from "@/components/CrochetFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <CrochetHeader />
      <CrochetHero />
      <NewArrivals />
      <CatalogueSection />
      <BookingForm />
      <CrochetFooter />
    </div>
  );
};

export default Index;
