// type Comment = {
//   id: number;
//   author: string;
//   date: string;
//   content: string;
// };

// const commentsData: Comment[] = [
//   {
//     id: 1,
//     author: "صفحة الثورة السورية",
//     date: "27/11/2012",
//     content: "الطيور المهاجرة ... هناك في بلاد البهية الصغيرة ...",
//   },
//   {
//     id: 2,
//     author: "صفحة الثورة السورية",
//     date: "26/11/2012",
//     content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
//   },
//   {
//     id: 3,
//     author: "صفحة الثورة السورية",
//     date: "26/11/2012",
//     content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
//   },
//   {
//     id: 4,
//     author: "صفحة الثورة السورية",
//     date: "26/11/2012",
//     content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
//   },
//   {
//     id: 5,
//     author: "صفحة الثورة السورية",
//     date: "26/11/2012",
//     content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
//   },
//   {
//     id: 6,
//     author: "صفحة الثورة السورية",
//     date: "26/11/2012",
//     content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
//   },
//   // ➝ add more comments here
// ];

"use client";

import { useState } from "react";

type Comment = {
  id: number;
  author: string;
  date: string;
  content: string;
};

const Comments = () => {
  const [comments] = useState<Comment[]>([
    {
      id: 1,
      author: "صفحة الثورة السورية",
      date: "27/11/2012",
      content: "الطيور المهاجرة ... هناك في بلاد البهية الصغيرة ...",
    },
    {
      id: 2,
      author: "صفحة الثورة السورية",
      date: "26/11/2012",
      content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
    },
    {
      id: 3,
      author: "صفحة الثورة السورية",
      date: "26/11/2012",
      content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
    },
    {
      id: 4,
      author: "صفحة الثورة السورية",
      date: "26/11/2012",
      content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
    },
    {
      id: 5,
      author: "صفحة الثورة السورية",
      date: "26/11/2012",
      content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
    },
    {
      id: 6,
      author: "صفحة الثورة السورية",
      date: "26/11/2012",
      content: "طيور الجنة تطير ... لأجل الطفولة التي تستحق ...",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(1);
  // const commentsPerPage = 5; // 👈 you can adjust this

  // Fetch comments from API
  // const fetchComments = async (page: number) => {
  //   try {
  //     const res = await fetch(
  //       `/api/comments?limit=${commentsPerPage}&page=${page}`
  //     );
  //     const data = await res.json();

  //     // Expecting API returns: { comments: [], total: number }
  //     setComments(data.comments);
  //     setTotalPages(Math.ceil(data.total / commentsPerPage));
  //   } catch (error) {
  //     console.error("Error fetching comments:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchComments(currentPage);
  // }, [currentPage]);

  return (
    <div className={` bg-[#fbfdff]`}>
      {/* Comments */}
      <div className="py-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="border-b border-gray-200 pb-3 mb-3 text-right"
          >
            <p className="text-gray-800">{comment.content}</p>
            <div className="flex flex-col sm:flex-row justify-between mt-2 text-sm text-gray-500">
              <span>من قبل: {comment.author}</span>
              <span className="text-[#8B0000]">{comment.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2  px-5 pb-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-3 py-1 border rounded-xl disabled:opacity-50"
        >
          السابق
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded-xl ${
              currentPage === i + 1 ? "bg-[#0D3B66] text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-3 py-1 border rounded-xl disabled:opacity-50"
        >
          التالي
        </button>
      </div>
    </div>
  );
};

export default Comments;
