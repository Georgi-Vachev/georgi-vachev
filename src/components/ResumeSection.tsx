"use client";

import { useState } from 'react';
import Image from 'next/image';

const ResumeSection = () => {
    const [showContact, setShowContact] = useState(false);

    return (
        <div className="p-4 border-2 border-gray-500 rounded-lg">
            <div className="flex flex-col items-center space-y-4">
                <Image
                    src="/profile.jpg"
                    alt="Profile picture"
                    width={128}
                    height={128}
                    className="rounded-lg"
                />
                <div className="flex-1 text-center">
                    <p className="text-slate-400">
                        Driven by a strong interest in the
                        entire development process, from
                        concept to execution, I enjoy
                        tackling diverse challenges and
                        expanding my skills.
                    </p>
                    <button
                        onClick={() => setShowContact(!showContact)}
                        className="mt-4 text-white py-2 px-4 rounded hover:bg-blue-600 block mx-auto"
                    >
                        {showContact ? "▲" : "▼"}
                    </button>
                    {showContact && (
                        <div className="mt-4 text-gray-600">
                            <p>Email: wachhew96@gmail.com</p>
                            <p>Phone: 0879034910</p>
                            <p>
                                <a href="https://www.linkedin.com/in/georgi-vachev-a42746168/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                            </p>
                            <p>
                                <a href="https://github.com/Georgi-Vachev" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResumeSection;
