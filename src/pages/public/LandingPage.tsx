import HeroSlider from "../../modules/public/landing/HeroSlider";
import CategorySection from "../../modules/public/landing/CategorySection";
import DealSection from "../../modules/public/landing/DealSection";
import ProductTabs from "../../modules/public/landing/ProductTabs";
import OfferBanner from "../../modules/public/landing/OfferBanner";
import RestaurantListing from "../../modules/public/landing/RestaurantListing";
import FeaturesSection from "../../modules/public/landing/FeaturesSection";


const LandingPage = () => {
    return (
        <main>
            <HeroSlider />
            <RestaurantListing />
            <CategorySection />
            <DealSection />
            <OfferBanner />
            <ProductTabs />
            <FeaturesSection />
        </main>
    );
}

export default LandingPage