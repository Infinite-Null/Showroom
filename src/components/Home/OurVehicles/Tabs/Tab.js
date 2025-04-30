"use client";

import EachTabs from "./EachTabs";

export default function Tab({ tabs, handleChangeTab, activeTab }) {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-7">
      <div className="bg-gray-200 gap-2 md:gap-4 overflow-hidden flex flex-row items-center justify-center rounded-lg md:p-2 p-1">
        {tabs.map((tab, index) => (
          <EachTabs
            handleChangeTab={handleChangeTab}
            activeTab={activeTab}
            name={tab.name}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
