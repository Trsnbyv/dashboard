
import RingLogo from "../assets/images/ring-logo.svg";
import SearchLogo from "../assets/images/search-logo.svg";
import Avatar from "../assets/images/avatar.svg";
import Plus from "../assets/images/plus-img.svg";

function Overview() {
  return (
    <div className="bg-[#F7F8FC] p-[30px] w-[80%] ml-[303px]">
    <div className="flex justify-between mb-[54px]">
      <h2 className="text-[24px] leading-[30px] font-bold text-[#252733]">
        Overview
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
    <ul className="flex justify-between mb-[36px]">
      <li className="list-item duration-300 border-[2px] border-[#DFE0EB] text-center py-6 w-[258px] rounded-[8px] bg-white">
        <p className="text-[#9FA2B4] text-[19px] leading-[23px] tracking-[0.4px] font-bold mb-3">
          Unresolved
        </p>
        <p className="text-[#252733] text-[40px] leading-[50px] tracking-[1px] font-bold">
          60
        </p>
      </li>
      <li className="list-item duration-300 border-[2px] border-[#DFE0EB] text-center py-6 w-[258px] rounded-[8px] bg-white">
        <p className="text-[#9FA2B4] text-[19px] leading-[23px] tracking-[0.4px] font-bold mb-3">
          Overdue
        </p>
        <p className="text-[#252733] text-[40px] leading-[50px] tracking-[1px] font-bold">
          16
        </p>
      </li>
      <li className="list-item duration-300 border-[2px] border-[#DFE0EB] text-center py-6 w-[258px] rounded-[8px] bg-white">
        <p className="text-[#9FA2B4] text-[19px] leading-[23px] tracking-[0.4px] font-bold mb-3">
          Open
        </p>
        <p className="text-[#252733] text-[40px] leading-[50px] tracking-[1px] font-bold">
          43
        </p>
      </li>
      <li className="list-item duration-300 border-[2px] border-[#DFE0EB] text-center py-6 w-[258px] rounded-[8px] bg-white">
        <p className="text-[#9FA2B4] text-[19px] leading-[23px] tracking-[0.4px] font-bold mb-3">
          On hold
        </p>
        <p className="text-[#252733] text-[40px] leading-[50px] tracking-[1px] font-bold">
          64
        </p>
      </li>
    </ul>
    <ul className="flex mb-[36px]">
      <li className="bg-white border-[2px] border-[#DFE0EB] p-8 rounded-l-[8px] w-[70%]">
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <h3 className="text-[19px] leading-[23px] font-bold tracking-[0.4px] text-[#252733] mb-[8px]">
              Today’s trends
            </h3>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4] mb-[8px]">
              as of 25 May 2019, 09:41 PM
            </p>
          </div>
          <ul className="flex gap-8">
            <li className="flex gap-[8px] items-center">
              <span className="h-[2px] w-[16px] rounded-[2px] bg-[#3751FF]"></span>
              <p className="text-[12px] leading-[15px] tracking-[0.1px] text-[#9FA2B4]">
                Today
              </p>
            </li>
            <li className="flex gap-[8px] items-center">
              <span className="h-[2px] w-[16px] rounded-[2px] bg-[#DFE0EB]"></span>
              <p className="text-[12px] leading-[15px] tracking-[0.1px] text-[#9FA2B4]">
                Yesterday
              </p>
            </li>
          </ul>
        </div>
      </li>
      <li className="w-[30%]">
        <ul className="flex flex-col">
          <li className=" duration-300 border-r-[2px] border-t-[2px] border-[#DFE0EB] text-center p-8 rounded-tr-[8px] bg-white">
            <p className="text-[#9FA2B4] text-[16px] leading-[22px] tracking-[0.3px] font-semibold mb-[6px]">
              Resolved
            </p>
            <p className="text-[#252733] text-[24px] leading-[30px] tracking-[0.3px] font-bold">
              449
            </p>
          </li>
          <li className="duration-300 border-r-[2px] border-t-[2px] border-[#DFE0EB] text-center p-8 bg-white">
            <p className="text-[#9FA2B4] text-[16px] leading-[22px] tracking-[0.3px] font-semibold mb-[6px]">
              Received
            </p>
            <p className="text-[#252733] text-[24px] leading-[30px] tracking-[0.3px] font-bold">
              426
            </p>
          </li>
          <li className="duration-300 border-r-[2px] border-t-[2px] border-[#DFE0EB] text-center p-8 bg-white">
            <p className="text-[#9FA2B4] text-[16px] leading-[22px] tracking-[0.3px] font-semibold mb-[6px]">
              Average first response time
            </p>
            <p className="text-[#252733] text-[24px] leading-[30px] tracking-[0.3px] font-bold">
              33m
            </p>
          </li>
          <li className="duration-300 border-r-[2px] border-t-[2px] border-[#DFE0EB] text-center p-8 bg-white">
            <p className="text-[#9FA2B4] text-[16px] leading-[22px] tracking-[0.3px] font-semibold mb-[6px]">
              Average response time
            </p>
            <p className="text-[#252733] text-[24px] leading-[30px] tracking-[0.3px] font-bold">
              3h 8m
            </p>
          </li>
          <li className="duration-300 border-r-[2px] border-t-[2px]  border-b-[2px] border-[#DFE0EB] text-center p-8 rounded-br-[8px] bg-white">
            <p className="text-[#9FA2B4] text-[16px] leading-[22px] tracking-[0.3px] font-semibold mb-[6px]">
              Resolution within SLA
            </p>
            <p className="text-[#252733] text-[24px] leading-[30px] tracking-[0.3px] font-bold">
              94%
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <ul className="flex justify-between">
      <li className="flew flex-row w-[48.5%] bg-white rounded-[8px] border-[2px]">
        <div className="flex justify-between items-start m-[32px] mb-[16px]">
          <div>
            <p className="text-[19px] leading-[23px] font-bold tracking-[0.4px] text-[#252733] mb-[8px]">Unresolved tickets</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]">Group:<span className="text-gray-700">Support</span></p>
          </div>
          <button className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#3751FF]">View details</button>
        </div>
        <div className="flex justify-between py-[19px] px-[32px] border-b-[2px]">
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Waiting on Feature Request</p>
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#9FA2B4]">4238</p>
        </div>
        <div className="flex justify-between py-[19px] px-[32px] border-b-[2px]">
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Awaiting Customer Response</p>
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#9FA2B4]">1005</p>
        </div>
        <div className="flex justify-between py-[19px] px-[32px] border-b-[2px]">
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Awaiting Developer Fix</p>
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#9FA2B4]">914</p>
        </div>
        <div className="flex justify-between py-[19px] px-[32px] ">
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Pending</p>
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#9FA2B4]">281</p>
        </div>

      </li>
      <li className="flew flex-row w-[48.5%] bg-white rounded-[8px] border-[2px]">
        <div className="flex justify-between items-start m-[32px] mb-[16px]">
          <div>
            <p className="text-[19px] leading-[23px] font-bold tracking-[0.4px] text-[#252733] mb-[8px]">Tasks</p>
            <p className="text-[12px] leading-[16px] tracking-[0.1px] text-[#9FA2B4]">Today</p>
          </div>
          <button className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#3751FF]">View all</button>
        </div>
        <div className="flex justify-between py-[17px] px-[32px] border-b-[2px]">
          <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#C5C7CD]">Create new task</p>
          <button className="p-[7px] rounded-[8px] bg-[#F0F1F7]"><img src={Plus} alt="plus" width={10} height={10} /></button>
        </div>
        <div className="flex justify-between py-[17px] px-[32px] border-b-[2px]">
          <div className="flex gap-[16px] items-center">
            <input type="checkbox"/>
            <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Finish ticket update</p>
          </div>
          <button className="text-[11px] leading-[13px] font-bold tracking-[0.5px] text-white uppercase pb-[5px] pt-[7px] px-[12px] bg-[#FEC400] rounded-[8px]">Urgent</button>
        </div>
        <div className="flex justify-between py-[17px] px-[32px] border-b-[2px]">
          <div className="flex gap-[16px] items-center">
            <input type="checkbox"/>
            <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Create new ticket example</p>
          </div>
          <button className="text-[11px] leading-[13px] font-bold tracking-[0.5px] text-white uppercase pb-[5px] pt-[7px] px-[12px] bg-[#29CC97] rounded-[8px]">New</button>
        </div>
        <div className="flex justify-between py-[17px] px-[32px]">
          <div className="flex gap-[16px] items-center">
            <input type="checkbox"/>
            <p className="text-[14px] leading-[20px] font-semibold tracking-[0.2px] text-[#252733]">Update ticket report</p>
          </div>
          <button className="text-[11px] leading-[13px] font-bold tracking-[0.5px] text-[#9FA2B4] uppercase pb-[5px] pt-[7px] px-[12px] bg-[#F0F1F7] rounded-[8px]">Default</button>
        </div>

      </li>
    </ul>
    </div>
  )
}

export default Overview
