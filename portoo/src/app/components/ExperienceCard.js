export const ExperienceCard = (props) => {
  return (
    <div className="flex w-[800px] gap-[48px] mx-auto justify-between p-[32px] rounded-[12px] drop-shadow-md bg-white lg:flex-col dark:bg-[#1f2937] lg:w-[400px]">
      <img className="w-[102px] h-[28px]" src="logo-upwork.png" />
      <div className="lg:order-last">
        <div>{props.title}</div>
        <ul className="list-disc px-[20px]">
          {/* <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> */}
          {props.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="w-[250px]">{props.date}</div>
    </div>
  );
};
