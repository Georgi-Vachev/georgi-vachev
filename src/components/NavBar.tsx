"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const navItems = [
        { href: "/resume", label: "Resume" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
    ];

    // Get the current route (e.g., "/projects")
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-md text-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="flex justify-around">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <li key={item.href} className="flex-1 text-center p-2">
                                <Link
                                    href={item.href}
                                    className={`
                    block py-2 px-4 text-lg font-semibold transition-colors duration-200
                    ${isActive
                                            ? "text-blue-400 border-b-2 border-blue-400"
                                            : "text-gray-300 hover:text-blue-200"
                                        }
                  `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
