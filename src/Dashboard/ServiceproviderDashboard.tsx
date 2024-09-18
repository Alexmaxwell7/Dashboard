import ServiceOfferings from "../ServiceOfferings/ServiceOfferings";
import { ServiceProviderSegmentation } from "../ServiceProviderSegmentation/ServiceProviderSegmentation";
import ServiceProvidersReport from "../ServiceProvidersReport/ServiceProvidersReport";
import ServiceProviderStats from "../ServiceProviderStats/ServiceProviderStats";
import TopServiceProviders from "../TopServiceProviders/TopServiceProviders";
import ChartArea from "../Images/Chart Area.png";
import TicketDashboardSecond from "../TicketDashboardSecond/TicketDashboardSecond";
import Navbar from "../Navbar";
import Cart from "../Images/Cart.png";
import Profile from "../Images/Profile.png";
import Stats from "../Images/Stats.png";
import Vector from "../Images/Vector 23.png";
import Vector1 from "../Images/Vector 23 (1).png";
import Vector2 from "../Images/Vector 23 (2).png";
import SalesCard from "../SalesCard/ProviderSalesCard";

export default function ServiceproviderDashboard() {
    const Sales2 = [
        {
          totalSales: "Rs. xxx.xx",
          comparisonImageSrc: Vector,
          comparisonPercentage: "+5",
          sales: "Total Sales",
          imageIcon: Stats,
          percentageColor: "text-yellow-500",
        },
        {
          totalSales: "xxxx",
          comparisonImageSrc: Vector1,
          comparisonPercentage: "-10",
          sales: "Total Customer",
          imageIcon: Profile,
          percentageColor: "text-red-500",
        },
        {
          totalSales: "xxxx",
          comparisonImageSrc: Vector2,
          comparisonPercentage: "+10",
          sales: "Total Orders",
          imageIcon: Cart,
          percentageColor: "text-green-500",
        },
      ];
      const chartAreaData = [
        {
          data: "Performance Metrics",
          value: 638465.51,
        },
        {
          data: "Feedback summary",
          value: 45697,
        },
        {
          data: "Rating Trends",
          value: 456784.67,
        },
      ];
  return (
    <div className="App bg-[#EAEBFF]">
    <div className="p-4">
        <Navbar />
        <div className="flex gap-4">
          <div className="w-[70%] pl-6">
            <div className="pt-2 flex gap-6 pl-5">
              {Sales2.map((data) => (
                <SalesCard
                  totalSales={data.totalSales}
                  comparisonImageSrc={data.comparisonImageSrc}
                  comparisonPercentage={data.comparisonPercentage}
                  sales={data.sales}
                  imageIcon={data.imageIcon}
                  percentageColor={data.percentageColor}
                />
              ))}
            </div>
            <div className="pl-4 pt-6  flex">
              <ServiceProviderStats />
            </div>

            <div className="pl-4 pt-2 mt-6">
              <ServiceProviderSegmentation />
            </div>

            <div className="pl-4 pt-2 mt-6">
              <TopServiceProviders />
            </div>
            <div className="pl-4 pt-2 mt-6">
              <ServiceOfferings
                activeServices={0}
                newServices={0}
                removedServices={0}
              />
            </div>
            <div className="flex">
              <div className="pl-2 pt-2 ml-1 mt-6">
                <div className="flex overflow-hidden flex-col p-6 bg-white rounded-2xl border border-solid border-stone-300 max-w-[491px] min-w-[200px] max-md:px-5">
                  <h1 className="text-xl font-bold text-stone-950">
                    Performance Metrics & Feedback
                  </h1>
                  <img
                    loading="lazy"
                    src={ChartArea}
                    alt="Service statistics graph"
                    className="mt-12 mb-24 object-contain aspect-[4.07] min-w-[240px] min-h-[275px] w-[320px] max-md:max-w-full"
                  />
                  {chartAreaData.map((data) => (
                    <div className="mb-4">
                      <p className="float-left">{data.data}</p>
                      <h3 className="float-right  font-bold leading-snug text-stone-950">
                        {data.value}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pl-8 pt-2 ml-3 mt-6">
                <ServiceProvidersReport />
              </div>
            </div>
          </div>
          <div className="w-[30%] mt-2">
            <TicketDashboardSecond />
          </div>
        </div>
      </div> 
    </div>
  )
}
