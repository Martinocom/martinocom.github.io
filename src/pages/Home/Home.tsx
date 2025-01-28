import React from "react";
import { BsBookHalf, BsBriefcaseFill, BsCodeSlash, BsFillCalendarCheckFill, BsKanban } from "react-icons/bs";

import { AppBadge } from "../../components/AppBadge/AppBadge";
import { MeCard } from "../../components/MeCard/MeCard";
import "./Home.scoped.scss";
import { AppSeparator } from "../../components/AppSeparator/AppSeparator";
import { AppCard } from "../../components/AppCard/AppCard";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HomeProps {}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <MeCard />
      <AppSeparator />

      <AppCard
        title="Moneyger"
        subtitle="Fast · Local · Simple"
        imgSrc="moneyger.png"
        site="https://github.com/Martinocom/MoneygerAppSite/"
        androidStore="https://play.google.com/store/apps/details?id=com.martinocom.moneyger"
        appleStore="https://github.com/Martinocom/MoneygerAppSite/?tab=readme-ov-file#2-where-can-i-get-it"
        description="Manage your money locally with a 100% AI-free, private app. No internet required, no data shared, completely free. Made with ❤️ by Martinocom."
      />
    </>
  );
};

export { Home };
