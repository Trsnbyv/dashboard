import RingLogo from "../assets/images/ring-logo.svg";
import SearchLogo from "../assets/images/search-logo.svg";
import Avatar from "../assets/images/avatar.svg";
import { NavLink, Outlet} from "react-router-dom";
function Ideas() {
  return (
    <>
    <div className="bg-[#F7F8FC] p-[30px] w-[80%] ml-[303px]">
    <div className="flex justify-between">
      <h2 className="text-[24px] leading-[30px] font-bold text-[#252733]">
        Ideas
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
    <div className="ideas-child flex justify-center gap-[50px] ml-[303px]">
      <NavLink to="aboutIdeas" className={'duration-300 font-bold text-[40px] text-center'}>
      About Ideas
      </NavLink>
      <NavLink to="newIdeas" className={'duration-300 font-bold text-[40px] text-center'}>
      New Ideas
      </NavLink>
    </div>
    <div className="ml-[303px] flex justify-center">
      <Outlet/>
    </div>
    </>
  )
}

export default Ideas

