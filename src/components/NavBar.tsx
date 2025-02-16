"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavBar = () => {
    const pathname = usePathname()
    const [showModal, setShowModal] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false)
            }
        }
        if (showModal) {
            document.addEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [showModal])

    const navItems = [
        { href: "/bio", label: "Bio" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { type: "cv", label: "CV" },
    ]

    return (
        <>
            <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-md text-white shadow-lg z-50">
                <div className="max-w-6x1 mx-auto">
                    <ul className="flex justify-center items-center gap-4 py-2">
                        {navItems.map((item) => {
                            if (item.type === "cv") {
                                return (
                                    <li key={item.label} className="text-center">
                                        <button
                                            onClick={() => setShowModal(true)}
                                            className="px-2 text-lg font-semibold transition-colors duration-200 text-gray-300 hover:text-blue-200"
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                )
                            } else {
                                if (!item.href) return null
                                const isActive = pathname === item.href
                                return (
                                    <li key={item.href} className="text-center">
                                        <Link
                                            href={item.href}
                                            className={`
                        px-2 text-lg font-semibold transition-colors duration-200
                        ${isActive
                                                    ? "text-blue-400 border-b-2 border-blue-400"
                                                    : "text-gray-300 hover:text-blue-200"
                                                }
                      `}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </nav>

            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
                    <div
                        ref={modalRef}
                        className="bg-gray-800 text-white p-6 rounded-md shadow-md w-80"
                    >
                        <p className="mb-6 text-center">
                            Would you like to check out my CV, or did you misclick?
                        </p>
                        <div className="flex justify-center">
                            <a
                                href="/cv.pdf"
                                download="GeorgiVachevCV.pdf"
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2 text-center"
                            >
                                Download CV 😊
                            </a>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded text-center"
                            >
                                Misclicked 💔
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar
