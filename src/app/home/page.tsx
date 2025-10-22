import Card from "@/components/Card/Card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold tracking-wide">توثيق المجازر</h1>
        <nav className="space-x-4 rtl:space-x-reverse">
          <a href="#" className="hover:text-[#C0A97A] transition">
            الرئيسية
          </a>
          <a href="#" className="hover:text-[#C0A97A] transition">
            الأرشيف
          </a>
          <a href="#" className="hover:text-[#C0A97A] transition">
            حول
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 px-6 text-center shadow-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000] mb-4">
          ذاكرة لا تموت
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 leading-relaxed">
          نوثّق أسماء وصور وتفاصيل ضحايا المجازر، كي لا يُمحى الحق ولا تُنسى
          الحقيقة.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#0D3B66] text-white rounded-md shadow hover:bg-[#092746] transition">
          استعرض التوثيقات
        </button>
      </section>
      <Card item={null} />

      {/* Sample Cards */}
      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#8B0000]">
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">مجزرة 2025</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            تفاصيل مختصرة عن الحدث وعدد الضحايا والتاريخ.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#0D3B66]">
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
            ضحايا موثقون
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            قاعدة بيانات بأسماء وصور الضحايا.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-t-4 border-[#C0A97A]">
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">عن المشروع</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            لماذا نقوم بهذا العمل وأهداف التوثيق للمستقبل.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-gray-300 text-center py-4 text-sm">
        © 2025 جميع الحقوق محفوظة - منصة التوثيق
      </footer>
    </div>
  );
}
