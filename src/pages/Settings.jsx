import RingLogo from "../assets/images/ring-logo.svg";
import SearchLogo from "../assets/images/search-logo.svg";
import Avatar from "../assets/images/avatar.svg";
function Settings() {
  return (
    <div className="bg-[#F7F8FC] h-[100vh] p-[30px] w-[80%] ml-[303px]">
    <div className="flex justify-between mb-[54px]">
      <h2 className="text-[24px] leading-[30px] font-bold text-[#252733]">
        Settings
      </h2>
      <div className="flex items-center">
        <img
          src={RingLogo}
          alt="ring"
          width={16}
          height={16}
          className="mr-[24px]"
        />
        <img
          src={SearchLogo}
          alt="search"
          width={16}
          height={16}
          className="mr-[32px]"
        />
        <div className="w-[1px] h-[32px] bg-[#DFE0EB] mr-[32px]"></div>
        <span className="text-[14px] leading-[20px] font-semibold text-[#252733] mr-[14px]">
          Jones Ferdinand
        </span>
        <img src={Avatar} alt="avatar" width={44} height={44} />
      </div>
    </div>
    </div>
  )
}

export default Settings
