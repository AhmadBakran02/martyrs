"use client";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Earth,
  House,
  IdCard,
  NotepadText,
  UserRound,
  Users,
  VenusAndMars,
} from "lucide-react";
import { FaChild } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoManOutline, IoWomanOutline } from "react-icons/io5";
import { MdFamilyRestroom } from "react-icons/md";
import { card } from "@/styles/Card.styles";
import { useState } from "react";
import { GetMartyrResponse } from "@/lib/getMastyrById";

interface MastyrCardProps {
  item: GetMartyrResponse;
}

const PersonalInfo = ({ item }: MastyrCardProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${card} card-shadow bg-[#fbfdff]`}>
      {/* Header */}
      <div
        className="bg-[var(--mainBlue)] px-7 py-8 sm:text-right text-center text-white flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)} // 👈 toggle on click
      >
        <h2 className="text-xl font-bold">المعلومات الشخصية</h2>
        {isOpen ? <ChevronUp /> : <ChevronDown />} {/* 👇 arrow icon */}
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Body */}
        {/* Body */}
        <div className="px-7 py-8 text-[#8B0000]">
          <div className="card-row">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <IdCard />
                <p>رقم الهوية الوطنية</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.nationalIdNumber || ""}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <UserRound />
                <p>الاسم</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.name || ""}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <IoManOutline className="w-6 h-6" />
                <p>اسم الأب</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.fatherName || ""}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <IoWomanOutline className="w-6 h-6" />
                <p>اسم الأم</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.motherName || ""}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <Users />
                <p>الكنية</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.lastName || ""}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <Calendar />
                <p>تاريخ الميلاد</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.dateOfBirth || ""}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <VenusAndMars />
                <p>الجنس</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.gender == "female" ? "ذكر" : "انثى"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <MdFamilyRestroom className="w-6 h-6" />
                <p>الحالة الاجتماعية</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.maritalStatus || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <FaChild className="w-6 h-6" />
                <p>عدد الأطفال</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.numberOfChildren || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <BriefcaseBusiness />
                <p>المهنة</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.profession || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <Earth />
                <p>الدولة</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.country || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <Earth />
                <p>المحافظة</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.governorate || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <Building2 />
                <p>المدينة</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.city || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <House />
                <p>الحي</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.neighborhood || "----"}</p>
            </div>
          </div>
          <div className="card-row mt-2">
            <div className="flex flex-row justify-between w-1/4">
              <div className="flex flex-row gap-2 text-gray-700">
                <GrGroup className="w-6 h-6" />
                <p>الإنتماء العرقي</p>
              </div>
              <p className="text-gray-700">:</p>
            </div>
            <div>
              <p>{item.data.martyr.ethnicAffiliation || "----"}</p>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="px-5 pb-8 flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2 text-gray-700">
              <NotepadText />
              <p>لمحة عن الشهيد</p>
            </div>
          </div>
          <div className="pr-8">
            <p>{item.data.martyr.overview || "----"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
