"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();

    const navItems = [
        { href: "/resume", label: "Resume" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
    ];

    const activeIndex = navItems.findIndex((item) => item.href === pathname);

    const getBorderClasses = (i: number) => {
        if (i === activeIndex) {
            return "";
        }

        if (activeIndex === 0) {
            if (i === 1) {
                return "border border-gray-500 rounded-tl-lg border-r-0";
            }
            if (i === 2) {
                return "border border-gray-500 rounded-tr-lg border-l-0";
            }
        }

        if (activeIndex === 1) {
            return "border border-gray-500 rounded-t-lg";
        }

        if (activeIndex === 2) {
            if (i === 0) {
                return "border border-gray-500 rounded-tl-lg border-r-0";
            }
            if (i === 1) {
                return "border border-gray-500 rounded-tr-lg border-l-0";
            }
        }

        return "border border-gray-500 rounded-t-lg";
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative">
                    <ul className="flex">
                        {navItems.map((item, i) => (
                            <li
                                key={item.href}
                                className={`flex-1 text-center p-2 ${getBorderClasses(i)}`}
                            >
                                <Link
                                    href={item.href}
                                    className="block text-gray-700 hover:text-blue-600"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
