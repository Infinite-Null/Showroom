"use client"
export default function EachTabs({name, handleChangeTab, activeTab, index}) {
  return (
    <button className={`cursor-pointer ${activeTab.index === index ? 'bg-orange-700 text-white shadow-2xl' : 'bg-transparent text-black' } text-xs md:text-[15px] md:p-3 p-2 rounded-lg font-bold transition-all`} onClick={()=>{
        handleChangeTab(name, index)
    }}>{name}</button>
  )
}
