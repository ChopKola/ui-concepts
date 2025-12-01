
import ChangePasswordPageLayout from "../../modules/auth/public/ChangePasswordPageLayout";
import ForgotPaaswordPageLayout from "../../modules/auth/public/ForgotPaaswordPageLayout";
import LoginPageLayout from "../../modules/auth/public/LoginPageLayout";
import RegisterPageLayout from "../../modules/auth/public/RegisterPageLayout";
import VendorUserRegistrationPageLayout from "../../modules/auth/public/VendorUserRegistrationPageLayout";
import AboutPage from "../../pages/public/AboutPage";
import CartPageLayout from "../../pages/public/CartPageLayout";
import CheckoutPageLayout from "../../pages/public/CheckoutPageLayout";
import LandingPage from "../../pages/public/LandingPage";
import MarketplacePage from "../../pages/public/MarketplacePage";
import MarketplaceProductDetailsPageLayout from "../../pages/public/MarketplaceProductDetailsPageLayout";
import OrderSuccessPageLayout from "../../pages/public/OrderSuccessPageLayout";
import OrderTrackingPageLayout from "../../pages/public/OrderTrackingPageLayout";
import PartnerWithUsPage from "../../pages/public/PartnerWithUsPage";
import PrivacyPolicyPage from "../../pages/public/PrivacyPolicyPage";
import RestaurantDetailsPageLayout from "../../pages/public/RestaurantDetailsPageLayout";
import RestaurantMarketplacePage from "../../pages/public/RestaurantMarketplacePage";
import ServicesPage from "../../pages/public/ServicesPage";
import SupportPage from "../../pages/public/SupportPage";
import TermsAndConditionsPage from "../../pages/public/TermsAndConditionsPage";
import UnifiedSearchPageLayout from "../../pages/public/UnifiedSearchPageLayout";

const publicFacingRoutes = [
    {
        path: '',
        name: 'home-page',
        element: <LandingPage />
    },{
        path: '/login',
        name: 'login-page',
        element: <LoginPageLayout />
    },{
        path: '/register',
        name: 'register-page',
        element: <RegisterPageLayout />
    },{
        path: '/vendor-registration',
        name: 'vendor-registration-page',
        element: <VendorUserRegistrationPageLayout />
    },{
        path: '/forgotten-password',
        name: 'forgotten-password-page',
        element: <ForgotPaaswordPageLayout />
    },{
        path: '/create-new-password',
        name: 'create-new-password-page',
        element: <ChangePasswordPageLayout />
    },{
        path: '/restaurants',
        name: 'restaurants-page',
        element: <RestaurantMarketplacePage />
    },{
        path: '/restaurants/:restaurantId',
        name: 'restaurant-details-page',
        element: <RestaurantDetailsPageLayout />
    },{
        path: '/marketplace',
        name: 'marketplace-page',
        element: <MarketplacePage />
    },{
        path: '/marketplace/:productID',
        name: 'marketplace-product-details-page',
        element: <MarketplaceProductDetailsPageLayout />
    },{
        path: '/services',
        name: 'services-page',
        element: <ServicesPage />
    },{
        path: '/about-chopkola',
        name: 'about-chopkola-page',
        element: <AboutPage />
    },{
        path: '/partner-with-us',
        name: 'register-page',
        element: <PartnerWithUsPage />
    },{
        path: '/terms-and-conditions',
        name: 'register-page',
        element: <TermsAndConditionsPage />
    },{
        path: '/privacy-policy',
        name: 'register-page',
        element: <PrivacyPolicyPage />
    },{
        path: '/support',
        name: 'support-page',
        element: <SupportPage />
    },{
        path: '/search-results',
        name: 'search-results-page',
        element: <UnifiedSearchPageLayout />
    },{
        path: '/cart',
        name: 'cart-page',
        element: <CartPageLayout />
    },{
        path: '/checkout',
        name: 'checkout-page',
        element: <CheckoutPageLayout />
    },{
        path: '/order-completed',
        name: 'order-completed-page',
        element: <OrderSuccessPageLayout />
    },{
        path: '/track-order',
        name: 'track-order-page',
        element: <OrderTrackingPageLayout />
    }
]

export default publicFacingRoutes;