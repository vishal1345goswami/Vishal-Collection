import ALLCARE from "@/components/ALL-CARE";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import Appdownload from "@/components/Appdownload";
import Caresection from "@/components/Caresections";
import Hersosection from "@/components/Hersosection";
import ServicesPage from "@/components/Servicespage";
import StoreOperation from "@/components/StoreOperation";

export default function Home() {
  return (
      <>
        <Hersosection/>
        <ServicesPage/>
        <Caresection/>
        <StoreOperation/>
        <AnalyticsDashboard/>
        <ALLCARE/>
        <Appdownload/>
      </>
  );
}
