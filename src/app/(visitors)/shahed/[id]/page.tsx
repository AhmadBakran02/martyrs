import CommentsSection from "@/components/CommentsSection";

import React from "react";

export default function Shahed() {
  return (
    <div className="flex justify-center items-center">
      <div className="lg:8/12 sm:w-9/12 w-11/12 flex flex-col gap-5 py-10">
        <div className="">
          <h2>صفحة الشهيد</h2>
        </div>
        {/* <Card />
        <PersonalInfo />
        <CitationInfo /> */}
        <CommentsSection />
        {/* <MediaGallery /> */}
      </div>
    </div>
  );
}
