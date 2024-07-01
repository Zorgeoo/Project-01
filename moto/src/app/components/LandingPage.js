export const LandingPage = () => {
  return (
    <div>
      <div className="w-[1512px] m-auto relative">
        <div className="h-[990px] relative fade">
          <img src="image 43.png" className="w-full absolute top-0 h-full" />
          <img src="image 61.png" className=" w-full absolute top-0 h-full" />
          <img src="image 65.png" className="w-full absolute top-0 h-full" />
        </div>
        <div className="flex flex-col items-center border border-orange">
          <header className="absolute top-0 flex text-black gap-[41px] p-[10px] justify-center border border-red-600">
            <div>HOME</div>
            <div>ABOUT US</div>
            <div>CONTACT US</div>
            <div>HELP CENTER</div>
          </header>
          <div className=" absolute text-[64px] text-center w-[700px] border border-red">
            Sands of Gobi Gobi Desert, Mongolia
          </div>
        </div>
      </div>
    </div>
  );
};
