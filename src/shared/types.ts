export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",

  }
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  export interface ClassType {
    name: string;
    description?: string;
    image: string;
  }

  //? here means the description can be added or not as it is important