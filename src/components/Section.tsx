"use client"

import { useState, ReactNode } from "react"
import Image from "next/image"

interface SectionProps {
    heading?: string | ReactNode
    headingImage?: {
        src: string
        alt?: string
        width?: number
        height?: number
        className?: string
    }
    image?: {
        src: string
        alt?: string
        width?: number
        height?: number
        className?: string
    }
    text?: ReactNode
    dropdownContent?: ReactNode
    initialDropdownOpen?: boolean
    showDivider?: boolean
    className?: string
}

export default function Section({
    heading,
    headingImage,
    image,
    text,
    dropdownContent,
    initialDropdownOpen = false,
    showDivider = true,
    className = "",
}: SectionProps) {
    const [isDropdownOpen, setDropdownOpen] = useState(initialDropdownOpen)

    return (
        <div className={`p-4 ${className}`}>
            {heading && (
                <div className="mb-4 flex items-center justify-center space-x-2">
                    {headingImage && (
                        <Image
                            src={headingImage.src}
                            alt={headingImage.alt || "Heading Icon"}
                            width={headingImage.width || 24}
                            height={headingImage.height || 24}
                            className={headingImage.className || ""}
                        />
                    )}
                    <h2 className="text-xl font-bold text-center">{heading}</h2>
                    {headingImage && (
                        <Image
                            src={headingImage.src}
                            alt={headingImage.alt || "Heading Icon"}
                            width={headingImage.width || 24}
                            height={headingImage.height || 24}
                            className={headingImage.className || ""}
                        />
                    )}
                </div>
            )}

            <div className="flex flex-col items-center space-y-4">
                {image && (
                    <Image
                        src={image.src}
                        alt={image.alt || "Section image"}
                        width={image.width || 128}
                        height={image.height || 128}
                        className={`rounded-lg ${image.className || ""}`}
                    />
                )}
                {text && (
                    <div className="flex-1 text-center">
                        {typeof text === "string" ? (
                            <p className="text-slate-400">{text}</p>
                        ) : (
                            text
                        )}
                    </div>
                )}
                {dropdownContent && (
                    <>
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            className={`text-white py-2 px-4 block mx-auto transform transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                        >
                            ▼
                        </button>
                        {isDropdownOpen && (
                            <div className="text-gray-600 border-t-2 border-orange-400 w-4/5 mx-auto pt-2 pb-2 text-center">
                                {dropdownContent}
                                <div className="border-b-2 border-orange-400 w-3/5 mx-auto mt-2"></div>
                            </div>
                        )}
                    </>
                )}
            </div>
            {showDivider && (
                <div
                    className={`mt-4 w-4/5 border-b-2 border-gray-600 mx-auto ${dropdownContent && isDropdownOpen ? "hidden" : ""
                        }`}
                ></div>
            )}
        </div>
    )
}
