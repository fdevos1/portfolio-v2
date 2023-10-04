const TabActiveHighlight = ({ activeTabId }: { activeTabId: number }) => {
  return (
    <div
      className={`absolute top-0 left-0 z-10 w-[2px] h-[42px] rounded-[4px] bg-cyan-500
   
      transition-transform duration-100 
     md:top-auto md:bottom-0  md:w-full  md:max-w-[120px]  md:h-[2px]  md:ml-[50px] 
    ${
      activeTabId === 1
        ? "md:translate-x-[calc(1*120px)] xl:translate-y-[calc(1*42px)]"
        : activeTabId === 2
        ? "md:translate-x-[calc(2*120px)] xl:translate-y-[calc(2*42px)]"
        : "md:translate-x-[calc(0*120px)] xl:translate-y-[calc(0*42px)]"
    }  
     
     
     
      `}
    />
  );
};

export default TabActiveHighlight;
