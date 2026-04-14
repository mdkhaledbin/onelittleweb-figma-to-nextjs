import Image from 'next/image'
import HotelPhoto from "@/public/about/reasons/HotelPhoto.png"
import StarIcon from "@/components/about/reasons/StarIcon";

const HotelCard = () => {
  return (
    <div className="mb-10 z-10 shadow-[16px_28px_38.6px_-10px_rgba(191,33,74,0.28)] rounded-[9px] bg-white flex items-end pt-2.25 px-2.25 pb-2.5 gap-1.75">

              <Image
                src={HotelPhoto}
                alt="Hotel PHoto"
                width={121}
                height={86}
                className="rounded-[7px]"
                style={{ height: "auto" }}
              />

              <div className="w-25.75 flex flex-col justify-end pb-1">

                <div className="flex flex-col gap-2">

                  <div className="h-1.25 w-14 rounded-[11px] bg-[#d9d9d9]" />

                  <div className="h-1.25 w-16.5 rounded-[11px] bg-[#d9d9d9]" />

                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  <div className="font-medium">
                    <span>$75</span>
                    <span className="text-[10px] text-black">/night</span>
                  </div>

                </div>
              </div>
            </div>
  )
}

export default HotelCard