"use client";
import Loading2 from "@/components/Loading2/Loading2";
import MassacreCard from "@/components/MassacreCard";
import { getAllMassacres, Massacre } from "@/lib/massacreApi";
import { useEffect, useState } from "react";

export default function EditMassacre() {
  const [list, setList] = useState<Massacre[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const fetchMassacres = async () => {
    try {
      const res = await getAllMassacres(100, 1);
      console.log("123213");
      const cleanList = (res.data.massacres || []).filter(
        (m: Massacre) => typeof m.name === "string" && m.name.trim() !== ""
      );
      setList(cleanList);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMassacres();
  }, []);

  const filtered = list.filter(
    (it) =>
      typeof it.name === "string" &&
      it.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  console.log(filtered);

  return (
    <div className="p-5 h-dvh">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث باسم المجزرة..."
        className="flex-1 bg-gray-100 w-full p-2 rounded-md"
      />
      <div className="m-5"></div>
      <div className="m-5"></div>
      {/* List */}
      <div className="flex flex-col gap-5">
        {loading && (
          <div className=" rounded-2xl p-10 flex justify-center items-center">
            <Loading2 />
          </div>
        )}
        {filtered.length === 0 && !loading ? (
          <div className="p-4 text-center text-gray-500">لا توجد نتائج</div>
        ) : (
          <ul className="flex flex-col gap-5 bg-gray-100 p-5 rounded-xl justify-center items-center">
            {filtered.map((item) => (
              <MassacreCard key={item._id} item={item} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
