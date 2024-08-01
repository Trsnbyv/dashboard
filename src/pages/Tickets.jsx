import RingLogo from "../assets/images/ring-logo.svg";
import SearchLogo from "../assets/images/search-logo.svg";
import Avatar from "../assets/images/avatar.svg";
import SortLogo from "../assets/images/sort-logo.svg"
import FilterLogo from "../assets/images/filter-logo.svg"
import AvatarFirst from "../assets/images/avatar-first.svg"
import AvatarSecond from "../assets/images/avatar-second.svg"
import AvatarThird from "../assets/images/avatar-third.svg"
import AvatarFourth from "../assets/images/avatar-fourth.svg"
import AvatarFifth from "../assets/images/avatar-fifth.svg"
import AvatarSixth from "../assets/images/avatar-sixth.svg"
import AvatarSeventh from "../assets/images/avatar-seventh.svg"
import AvatarEigth from "../assets/images/avatar-eights.svg"
import MoreIcon from "../assets/images/more-icon.svg"
function Tickets() {
  return (
    <div className="bg-[#F7F8FC]  p-[30px] w-[80%] ml-[303px]">
      <div className="flex justify-between mb-[54px]">
        <h2 className="text-[24px] leading-[30px] font-bold text-[#252733]">
          Tickets
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
      <div className="pt-8 bg-white border-[2px] rounded-[8px]">
        <div className="flex justify-between px-[32px] mb-[48px]">
          <h3 className="text-[19px] leading-[23px] tracking-[0.4px] font-bold text-[#252733]">All tickets</h3> 
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src={SortLogo} alt="sort" width={16} height={16} />
              <span className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#4B506D]">Sort</span>
            </div> 
            <div className="flex items-center gap-2">
              <img src={FilterLogo} alt="sort" width={16} height={16} />
              <span className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#4B506D]">Filter</span>
            </div> 
          </div>
        </div>
        <div className="flex gap-[40px] px-[32px] pb-[12px] border-b-[2px]">
          <div className="w-[450px]">
            <p className="text-[14px] leading-[17px] tracking-[0.2px] font-bold text-[#9FA2B4]">Ticket details</p>
          </div>
          <div className="w-[225px]">
            <p className="text-[14px] leading-[17px] tracking-[0.2px] font-bold text-[#9FA2B4]">Customer name</p>
          </div>
          <div className="w-[150px]">
            <p className="text-[14px] leading-[17px] tracking-[0.2px] font-bold text-[#9FA2B4]">Date</p>
          </div>
          <div className="w-[114px]">
            <p className="text-[14px] leading-[17px] tracking-[0.2px] font-bold text-[#9FA2B4]">Priority</p>
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarFirst} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Contact Email not Linked</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 1 day ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Tom Cruise</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 24.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 26, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">6:30 PM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#F12B2C]">high</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarSecond} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Adding Images to Featured Posts</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 1 day ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Matt Damon</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 24.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 26, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">8:00 AM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#FEC400]">low</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarThird} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">When will I be charged this month?</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 1 day ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Robert Downey</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 24.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 26, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">7:30 PM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#F12B2C]">Priority</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarFourth} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Payment not going through</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 2 days ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Christian Bale</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 24.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 25, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">5:00 PM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#29CC97]">normal</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarFifth} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Unable to add replies</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 2 days ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Henry Cavil</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 24.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 25, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">4:00 PM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#F12B2C]">high</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarSixth} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Downtime since last week</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 2 days ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Chris Evans</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 23.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 25, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">2:00 PM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#29CC97]">normal</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarSeventh} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Referral Bonus</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 4 days ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Sam Smith</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 22.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 25, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">11:30 AM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#FEC400]">low</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex hover:bg-[#3752ff06] duration-300 gap-[40px] px-[31px] py-[24px] border-b-[2px] ">
          <div className="w-[450px] flex items-center gap-6">
            <img src={AvatarEigth} alt="avatar" width={44} height={44} />
            <div className="flex flex-col gap-1">
              <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">How do I change my password?</p>
              <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">Updated 6 days ago</p>
            </div>
          </div>
          <div className="w-[225px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">Steve Rogers</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">on 21.05.2019</p>
          </div>
          <div className="w-[150px] flex flex-col gap-1">
            <p className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#252733]">May 24, 2019</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">1:00 PM</p>          
          </div>
          <div className="w-[134px] flex items-center justify-between">
            <p className="text-[11px] leading-[13px] tracking-[0.5px] font-bold text-white py-[5px] pt-[7px] uppercase px-[12px] rounded-[100px] bg-[#29CC97]">normal</p>
            <img src={MoreIcon} alt="More" width={4} height={16} />
          </div>
        </div>
        <div className="flex justify-end px-[32px] py-[24px]">
          <p className="text-[#9FA2B4] text-[13px] leading-[20px] tracking-[0.3px] mr-[48px]">Rows per page: 8</p>
          <p className="text-[#9FA2B4] text-[14px] leading-[20px] tracking-[0.3px] mr-[24px]">1-8 of 1240</p>
          <p className="text-[#9FA2B4] text-[14px] leading-[20px] tracking-[0.3px] mr-[24px]"></p>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
