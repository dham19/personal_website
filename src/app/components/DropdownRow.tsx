import Link from "next/link";

function DropdownRow({ title = "Null", href = "#" }) {
  return (
    <Link
      href={href}
      scroll={false}
      className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-neutral-900 font-bold rounded-lg"
    >
      {title}
    </Link>
  );
}

export default DropdownRow;
