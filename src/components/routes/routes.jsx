import AboutUs from "../pages/AboutUs";
import CommunityGuidelines from "../pages/CommunityGuidelines";
import CommunityGuidelinesDetail from "../pages/CommunityGuidelinesDetail";
import Disclaimer from "../pages/Disclaimer";
import Distributor from "../pages/Distributor";
import Faqs from "../pages/Faqs";
import HelpCenter from "../pages/HelpCenter";
import Home from "../pages/Home";
import HowToPlay from "../pages/HowToPlay";
import Jobs from "../pages/Jobs";
import News from "../pages/News";
import OurWinners from "../pages/OurWinners";
import PointCalculations from "../pages/PointCalculations";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Sitemap from "../pages/Sitemap";
import TermsConditions from "../pages/TermsConditions";


const routes = [
    {
        path    :   "/",
        exact   :   true,
        ActiveMenuKey: ['key1'],
        component   : <Home title="Home"/>
    },
    {
        path    :   "/help-center",
        exact   :   true,
        ActiveMenuKey: ['key2'],
        component   : <HelpCenter title="Help center"/>
    },
    {
        path    :   "/how-to-play",
        exact   :   true,
        ActiveMenuKey: ['key3'],
        component   : <HowToPlay title="How to play"/>
    },
    {
        path    :   "/point-calculations",
        exact   :   true,
        ActiveMenuKey: ['key4'],
        component   : <PointCalculations title="Point Calculations"/>
    },
    {
        path    :   "/our-winners",
        exact   :   true,
        ActiveMenuKey: ['key5'],
        component   : <OurWinners title="Our Winners"/>
    },
    {
        path    :   "/faqs",
        exact   :   true,
        ActiveMenuKey: ['key6'],
        component   : <Faqs title="Faqs"/>
    },
    {
        path    :   "/community-guidelines",
        exact   :   true,
        ActiveMenuKey: ['key7'],
        component   : <CommunityGuidelines title="Community Guidelines"/>
    },
    {
        path    :   "/disclaimer",
        exact   :   true,
        ActiveMenuKey: ['key14'],
        component   : <Disclaimer title="Disclaimer"/>
    },
    {
        path    :   "/community-guidelines-detail",
        exact   :   true,
        ActiveMenuKey: ['key13'],
        component   : <CommunityGuidelinesDetail title="Community Guidelines 2"/>
    },
    {
        path    :   "/privacy-policy",
        exact   :   true,
        ActiveMenuKey: ['key8'],
        component   : <PrivacyPolicy title="Privacy Policy"/>
    },
    {
        path    :   "/terms-conditions",
        exact   :   true,
        ActiveMenuKey: ['key9'],
        component   : <TermsConditions title="Terms & Conditions"/>
    },
    {
        path    :   "/news",
        exact   :   true,
        ActiveMenuKey: ['key10'],
        component   : <News title="News"/>
    },
    {
        path    :   "/jobs",
        exact   :   true,
        ActiveMenuKey: ['key11'],
        component   : <Jobs title="Jobs"/>
    },
    {
        path    :   "/about-us",
        exact   :   true,
        ActiveMenuKey: ['key12'],
        component   : <AboutUs title="About Us"/>
    },
    {
        path    :   "/distributor",
        exact   :   true,
        ActiveMenuKey: ['key13'],
        component   : <Distributor title="Distributor"/>
    },
    {
        path    :   "/sitemap",
        exact   :   true,
        ActiveMenuKey: ['key98'],
        component   : <Sitemap title="Sitemap"/>
    },
]

export default routes;