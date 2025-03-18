import { Button } from "./ui/button"

import Link from "next/link"

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-12 py-2 bg-transparent">    
    <div>
        <p className="font-extrabold text-black ">
            Draw<span className="text-gray-500">It</span>
        </p>
    </div>

    <div className="flex gap-4">
        <Link href={"/signup"}>
        <Button variant="secondary">Sign Up</Button>
        </Link>
        <Link href={"/signin"}>
        <Button >Sign In</Button>
        </Link>
    </div>
    </div>
    )

  }