import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[#1A1A1A] text-white p-8 flex justify-between items-center shadow-md">
      <div>
        <ul className="flex gap-5">
          <li>
            <Link href={"/"}>الصفحة الرئيسية</Link>
          </li>
          <li>
            <Link href={"/"}>أسماء الشهداء</Link>
          </li>
          <li>
            <Link href={"/"}>أرسل مشاركة</Link>
          </li>
          <li>
            <Link href={"/aboutus"}>من نحن</Link>
          </li>
          <li>
            <Link href={"/conect"}>الاتصال</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
