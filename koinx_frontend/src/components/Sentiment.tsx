import { IoMdInformationCircle } from "react-icons/io";
import {FaAngleRight} from "react-icons/fa";

function Sentiment() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-3">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Sentiment</div>
        <div className="flex items-center py-2 mt-2">
          <div className="text-[#44475B] font-semibold text-xl">Key Events</div>
          <div className="">
            <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
          </div>
        </div>
        <div className="lg:flex overflow-x-auto">
          <div className="lg:w-[456px]  bg-[#E8F4FD] h-[204px] rounded-xl overflow-y-hidden">
            <div className="p-4 flex">
              <div className="ml-3 ">
                <div className="lg:text-sm text-xs font-medium text-[#191C1F] whitespace-normal">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </div>
                <div className="text-sm font-normal text-[#3E5765] whitespace-normal mt-2">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[456px] bg-[#EBF9F4] h-[204px] rounded-xl lg:ml-4 mt-4 lg:mt-0 overflow-y-hidden">
            <div className="p-4 flex">
              <div className="ml-3">
                <div className="lg:text-sm text-xs font-medium text-[#191C1F] whitespace-normal">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 -ml-8 bg-white p-4 rounded-full cursor-pointer">
                    <FaAngleRight className="text-[#757779]" />
                  </div>
                </div>
                <div className="lg:text-sm text-xs font-normal text-[#3E5765] whitespace-normal mt-2 over">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum. Ac consectetur et pretium in a bibendum in. Sed
                  vitae sit nisi viverra natoque lacinia libero enim.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center py-4 mt-6">
            <div className="text-[#44475B] font-semibold text-xl">
              Analyst Estimates
            </div>
            <div className="text-[#ABB9BF] text-lg ml-2">
              <IoMdInformationCircle/>
            </div>
          </div>

          <div className="flex mt-2">
            <div className="text-4xl bg-[#EBF9F4] text-[#0FBA83] lg:px-10 lg:py-12 px-8 py-6 rounded-full items-center flex">
              76<div className="text-lg ">%</div>
            </div>

            <div className="lg:px-10 px-2 mt-2">
              <div className="flex p-2 items-center">
                <div className="text-[#7C7E8C] text-[15px] mr-9">Buy</div>
                <div className="md:w-96 w-20 h-2">
                  <div className="bg-[#00B386] h-full rounded-lg "></div>
                </div>
                <div className="ml-3 text-[#7C7E8C] text-sm">76%</div>
              </div>

              <div className="flex p-2 items-center">
                <div className="text-[#7C7E8C] text-[15px] mr-9">Hold</div>
                <div className="md:w-8 w-4 h-2">
                  <div className="bg-[#C7C8CE] h-full rounded-lg "></div>
                </div>
                <div className="ml-3 text-[#7C7E8C] text-sm">8%</div>
              </div>

              <div className="flex p-2 items-center">
                <div className="text-[#7C7E8C] text-[15px] mr-9">Sell</div>
                <div className="md:w-16 w-8 h-2">
                  <div className="bg-[#F7324C] h-full rounded-lg "></div>
                </div>
                <div className="ml-3 text-[#7C7E8C] text-sm">16%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sentiment
