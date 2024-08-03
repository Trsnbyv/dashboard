import RingLogo from "../assets/images/ring-logo.svg";
import SearchLogo from "../assets/images/search-logo.svg";
import Avatar from "../assets/images/avatar.svg";
import SortLogo from "../assets/images/sort-logo.svg";
import FilterLogo from "../assets/images/filter-logo.svg";
import ChooseImg from "../assets/images/choose-img.svg";
import { useState } from "react";

function Tickets() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    image: "",
    details: "",
    name: "",
    date: "",
    priority: "LOW",
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets, formData]);
    setFormData({
      image: "",
      details: "",
      name: "",
      date: "",
      priority: "LOW",
    });
    handleCloseModal();
  };

  return (
    <div className=" w-[80%] ml-[303px]">
      <div className="flex justify-between p-[30px] bg-[#F7F8FC] mb-[54px]">
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
      <div className="flex justify-between bg-white mb-[54px] px-[32px]">
        <div className="flex gap-[15px] items-center">
          <h3 className="text-[19px] leading-[23px] tracking-[0.4px] font-bold text-[#252733]">
            All tickets
          </h3>
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white py-2 px-4 rounded-[10px]"
          >
            Create Ticket
          </button>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src={SortLogo} alt="sort" width={16} height={16} />
            <span className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#4B506D]">
              Sort
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={FilterLogo} alt="sort" width={16} height={16} />
            <span className="text-[14px] leading-[20px] tracking-[0.2px] font-semibold text-[#4B506D]">
              Filter
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
            <div className="bg-white w-[600px] p-6 rounded-[20px] shadow-lg">
              <h2 className="text-[30px] text-center text-blue-500 mb-4">
                Create Ticket
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex items-center flex-col justify-center">
                  <label className="block text-center mb-1">
                    <span className="block text-[20px] font-bold text-blue-500 ">
                      Image
                    </span>
                    <img
                      src={ChooseImg}
                      width={100}
                      height={100}
                      alt="choose"
                    />
                    <input
                      type="file"
                      name="image"
                      onChange={handleChange}
                      className="w-full hidden"
                    />
                  </label>
                </div>
                <div className="mb-4 flex justify-between">
                  <label className="block mb-1 w-[47%] ">
                    <span className="text-[20px] font-bold text-blue-500">
                      Ticket Details
                    </span>
                    <input
                      type="text"
                      name="details"
                      autoComplete="off"
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full border-[2px] rounded-[10px] outline-none focus:border-blue-500 duration-300 p-2"
                    />
                  </label>
                  <label className="block mb-1 w-[47%]">
                    <span className="text-[20px] font-bold text-blue-500">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-[2px] rounded-[10px] outline-none focus:border-blue-500 duration-300 p-2"
                    />
                  </label>
                </div>
                <div className="mb-4 flex justify-between">
                  <label className="block mb-1 w-[47%]">
                    <span className="text-[20px] font-bold text-blue-500">
                      Date
                    </span>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full border-[2px] rounded-[10px] outline-none focus:border-blue-500 duration-300 p-2"
                    />
                  </label>
                  <label className="block mb-1 w-[47%]">
                    <span className="text-[20px] font-bold text-blue-500">
                      Priority
                    </span>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full border-[2px] rounded-[10px] outline-none focus:border-blue-500 duration-300 p-[11px]"
                    >
                      <option value="LOW">LOW</option>
                      <option value="MEDIUM">NORMAL</option>
                      <option value="HIGH">HIGH</option>
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-[10px] hover:opacity-75"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-red-500 text-white py-2 px-4 rounded-[10px] ml-2 hover:opacity-75"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        <div>
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="border hover:bg-[#3752ff0a] duration-300 w-[1100px] rounded-lg flex justify-between py-[24px] px-[31px] items-center mb-4"
            >
              <img
                src={ticket.image}
                alt="Avatar"
                className="w-[44px]  h-[44px] rounded-[50%] mr-4"
              />
              <div className="flex items-center gap-[40px]">
                  <div className="flex flex-col gap-1 w-[372px]">
                    <span className="text-[14px] leading-[20px] tracking-[0.2px] text-[#252733] text-semibold">Ticket details:</span>
                    <span className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">{ticket.details}</span>
                  </div>
                  <div className="flex flex-col gap-1 w-[208px]">
                    <span className="text-[14px] leading-[20px] tracking-[0.2px] text-[#252733] text-semibold">Customer name:</span>
                    <span className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">{ticket.name}</span>
                  </div>
                  <div className="flex flex-col gap-1 w-[140px]">
                    <span className="text-[14px] leading-[20px] tracking-[0.2px] text-[#252733] text-semibold">Date:</span>
                    <span className="text-[12px] leading-[16px] tracking-[0.1px] text-[#C5C7CD]">{new Date(ticket.date).toLocaleDateString()}</span>
                  </div>
              </div>
              <div>
                <span
                  className={`py-[5px] text-[11px] leading-[13px] tracking-[0.5px] px-[12px] rounded-[100px] ${
                    ticket.priority === "HIGH"
                      ? "bg-[#F12B2C]"
                      : ticket.priority === "LOW"
                      ? "bg-[#FEC400]"
                      : "bg-[#29CC97]"
                  } text-white`}
                >
                  {ticket.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tickets;

