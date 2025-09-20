import Image from "next/image"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
      <div>
        <h2 className="flex items-center justify-content text-5xl font-bold">
          Kerrick Truong 
          <Image className="" 
            src="/my_logo.png" 
            alt="My Logo"
            width={80}
            height={80}>
          </Image>
        </h2>
      </div>

      <div className="flex space-x-8 text-3xl font-semibold">
        <Link href="#projects" className="hover:text-gray-400">Work</Link>
        <Link href="#about" className="hover:text-gray-400">About</Link>
        <Link href="#contact" className="hover:text-gray-400">Contact</Link>
      </div>
    </nav> 
  );
}

export default Navbar;
