import { NavLink } from "react-router-dom";
import SiteLogo from "../../assets/images/site-logo.svg";
import OverviewLogo from "../../assets/images/overview-logo.svg";
import TicketsLogo from "../../assets/images/tickets-logo.svg";
import IdeasLogo from "../../assets/images/ideas-logo.svg";
import ContactsLogo from "../../assets/images/contacts-logo.svg";
import AgentsLogo from "../../assets/images/agents-logo.svg";
import ArticlesLogo from "../../assets/images/articles-logo.svg";
import SettingsLogo from "../../assets/images/settings-logo.svg";
import SubscriptionLogo from "../../assets/images/subscription-logo.svg";

function Navbar() {
  return (
    <div className="flex">
        <div className="bg-[#363740] w-[20%] h-[100vh] pt-[37px] fixed top-0 left-0">
          <a href="/" className="flex items-center gap-3 mb-[39px] ml-[32px]">
            <img src={SiteLogo} alt="site logo" width={32} height={32} />
            <span className="text-[#A4A6B3] text-[19px] leading-[23px] font-bold">
              Dashboard Kit
            </span>
          </a>
          <ul className="flex flex-col">
            <li>
              <NavLink
                to="/"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={OverviewLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Overview
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tickets"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={TicketsLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Tickets
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ideas"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={IdeasLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Ideas
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={ContactsLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Contacts
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/agents"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={AgentsLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Agents
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/articles"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={ArticlesLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Articles
                </span>
              </NavLink>
            </li>
            <li className="w-[100%] h-[1px] bg-[#DFE0EB] my-[16px] opacity-20"></li>
            <li>
              <NavLink
                to="/settings"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={SettingsLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Settings
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subscription"
                className="nav-item flex items-center duration-300 gap-6 pl-[32px] border-l-[3px] py-[18px] border-transparent hover:border-[#DDE2FF]"
              >
                <img
                  src={SubscriptionLogo}
                  className="icon"
                  alt="logo"
                  width={16}
                  height={16}
                />
                <span className="text-[#A4A6B3] text-[16px] tracking-[0.2px] leading-[20px]">
                  Subscription
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Navbar;
