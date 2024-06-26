export const Button = (props) => {
  return (
    <div>
      <button className="px-[20px] py-[4px] bg-gray-200 rounded-[12px] dark:bg-[#374151] dark:text-[white]">
        {props.title}
      </button>
    </div>
  );
};
