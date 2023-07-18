"use client";

function CategoryLabel({ category }) {
  return (
    <div className="flex flex-wrap items-center content-center gap-1">
      <div className="flex py-1 px-5 items-center content-center gap-2 rounded-2xl bg-[var(--background-sec)] text-center font-semibold text-base">
        {category?.name.charAt(0).toUpperCase() + category?.name.slice(1)}
      </div>
    </div>
  );
}

export default CategoryLabel;
