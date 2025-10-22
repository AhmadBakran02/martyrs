"use client";

import { useState } from "react";
import { card } from "@/styles/Card.styles";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: send data to API here
  };

  return (
    <div className={`${card} card-shadow bg-[#fbfdff] `}>
      {/* Header */}
      <div className="bg-[var(--mainBlue)] px-6 py-4 sm:text-right text-center text-white">
        <h2 className="text-lg font-semibold">شاركنا برأيك</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-7 py-4 ">
        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-1 ">الاسم</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="اكتب اسمك الكامل"
            required
            className="input"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">
            البريد الإلكتروني
            <span className="text-sm text-gray-500"> (لن يظهر للقراء)</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
            className="input"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-gray-700 mb-1">الموضوع</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="أدخل عنوان الموضوع"
            required
            className="input"
          />
        </div>

        {/* Comment */}
        <div>
          <label className="block text-gray-700 mb-1">التعليق</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="اكتب تعليقك هنا"
            rows={5}
            required
            className="input"
          ></textarea>
        </div>

        {/* submit*/}
        <button type="submit" className="btn main-btn w-full ">
          إرسال
        </button>
      </form>
    </div>
  );
}
