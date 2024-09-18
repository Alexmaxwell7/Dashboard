import SalesCard from "../SalesCard/SalesCard";
import { SectorPerformance } from "../SectorPerformance/SectorPerformance";
import TicketDashboard from "../TicketDashboard/TicketDashboard";
import UpdatesComponent from "../UpdatesComponent/UpdatesComponent";
import MyComponent from "../MyComponent";
import OrderStatistics from "../OrderStatistics/OrderStatistics";
import Cart from "../Images/Cart.png";
import Profile from "../Images/Profile.png";
import Stats from "../Images/Stats.png";
import Vector from "../Images/Vector 23.png";
import Vector1 from "../Images/Vector 23 (1).png";
import Vector2 from "../Images/Vector 23 (2).png";

function MainDashboard() {
  const Sales = [
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

  return (
    <div className="App bg-[#EAEBFF]">
      <div className="p-4">
        <MyComponent />

        <div className="flex gap-10">
          <div className="w-[60%]">
            <div className="pt-6 flex gap-5 ml-10">
              {Sales.map((data) => (
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
            <div className="pl-8 pt-6 ml-3 flex">
              <OrderStatistics
                totalOrders={'xx,xxx'}
                activeOrders={'x,xxx,xxx'}
                completedOrders={'x,xxx,xxx'}
              />
              <div className="ml-6">
                <SectorPerformance />
              </div>
            </div>
            <div className="pl-8 pt-6 ml-3">
              <UpdatesComponent />
            </div>
          </div>
          <div className="p-6 w-[40%]">
            <TicketDashboard />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default MainDashboard;
