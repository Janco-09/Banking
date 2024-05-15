import { HeaderBox } from "@/components/HeaderBox";
import { RightSidebar } from "@/components/RightSidebar";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
  const user = {
    firstName: "Janco",
    lastName: "De Beer",
    email: "debeerjanco20@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={user.firstName ?? "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.25}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={user}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 150 }]}
      />
    </section>
  );
}
