import blueBerryCake from "../assets/images/blueberry-cake.png";
import chocolateCake from "../assets/images/chocolate-cake.png";
import brownieCake from "../assets/images/brownie-cake.png";
import pumpkinCake from "../assets/images/pumpkin-cake.png";
import cupCake from "../assets/images/cupcake.png";

interface ICampaign {
  isOn: boolean;
  imageSrc: string;
  name: string;
  createdOn: string;
  dateRange: string;
  clicks: number;
  budget: string;
  location: string;
  platform: "Youtube" | "Facebook" | "Google";
  status: "Live now" | "Paused" | "Exhausted";
}

export const campaigns: ICampaign[] = [
  {
    isOn: true,
    name: "Bluebarry cake name",
    createdOn: "14 July",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: 300,
    budget: "INR 3,400",
    location: "Chennai",
    platform: "Facebook",
    status: "Live now",
    imageSrc: blueBerryCake,
  },
  {
    isOn: false,
    name: "Chocolate cake name",
    createdOn: "20 Jan",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: 210,
    budget: "INR 3,400",
    location: "Coimbatore",
    platform: "Facebook",
    status: "Paused",
    imageSrc: chocolateCake,
  },
  {
    isOn: false,
    name: "Brownie cake name",
    createdOn: "12 Jun",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: 123,
    budget: "INR 3,400",
    location: "Erode",
    platform: "Facebook",
    status: "Exhausted",
    imageSrc: brownieCake,
  },
  {
    isOn: true,
    name: "Pumpkin cake name",
    createdOn: "28 Feb",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: 435,
    budget: "INR 3,400",
    location: "Coimbatore",
    platform: "Youtube",
    status: "Live now",
    imageSrc: blueBerryCake,
  },
  {
    isOn: true,
    name: "Cup cakes campaign",
    createdOn: "10 July",
    dateRange: "25 jul 2020 - 01 Aug 2020",
    clicks: 123,
    budget: "INR 3,400",
    location: "Coimbatore",
    platform: "Google",
    status: "Live now",
    imageSrc: cupCake,
  },
];
