import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";

function Input() {
  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide`}
    >
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={"https://github.com/nmferraz.png"}
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="divide-y divide-gray-700 w-full">
        <div className={`${"pb-7"} ${"space-y-2.5"}`}>
          <textarea
            placeholder="What's happening?"
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          />
          <div className="relative">
            <div className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
              <XIcon className="text-white h-5" />
            </div>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src={"https://github.com/nmferraz.png"}
              alt=""
              className="rounded-2xl max-h-80 object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icon">
              <PhotographIcon className="text-[#1d9bf0] h-[22px]" />
              <input type="file" hidden />
            </div>

            <div className="icon rotate-90">
              <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
            </div>

            <div className="icon">
              <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
            </div>
          </div>
          <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
