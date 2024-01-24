import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between">
      <div>
        <Link className="text-black text-4xl" href="/">
          Jake Jakub
        </Link>
        <p className="italic">Certified Public Accountant</p>
      </div>
      <div className="flex ">
        <Link className="text-black mr-4" href="/resume.pdf" target="_blank">
          Download CV
        </Link>
        <Link className="text-black mr-4" href="/#about">
          About Me
        </Link>
        <Link className="text-black mr-4" href="#connect">
          Connect
        </Link>
      </div>

      {/* <Link href="/tickets">View Tickets</Link> */}
    </nav>
  );
}
