import Section from "@/components/Section";

export default function Projects() {
    return (
        <main className="container mx-auto p-4 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mx-auto w-full max-w-lg">
                    <Section
                        heading="Bitter Critters"
                        video={{
                            src: "/bitter-critters-demo.mp4",
                            poster: "/bitter-critters-poster.jpg",
                        }}
                        text={
                            <>
                                February 2024
                                <br />
                                TypeScript, PIXI, React, Python, MongoDB
                                <br />
                                <a href="https://github.com/Georgi-Vachev/bitter-critters" target="_blank" className="text-blue-500">
                                    GitHub
                                </a>
                                <br />
                                <a href="https://bitter-critters.vercel.app" target="_blank" className="text-blue-500">
                                    Vercel
                                </a>
                            </>
                        }
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        Turn-based fighting game where players select a creature from their collection, each
                                        with varied stats and abilities, and engage in battles with abilities and consumables.
                                        (Combat and account-based features are WIP)
                                    </p>
                                </>
                            </p>
                        }
                    />
                </div>
                <div className="mx-auto w-full max-w-lg">
                    <Section
                        heading="Circle Wars"
                        video={{
                            src: "/circle-wars-demo.mp4",
                            poster: "/circle-wars-poster.jpg",
                        }}
                        text={
                            <>
                                January 2025
                                <br />
                                TypeScript, PIXI, React
                                <br />
                                <a href="https://github.com/Georgi-Vachev/circle-wars" target="_blank" className="text-blue-500">
                                    GitHub
                                </a>
                                <br />
                                <a href="https://circle-wars.vercel.app" target="_blank" className="text-blue-500">
                                    Vercel
                                </a>
                            </>
                        }
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        Top down shooter game where (almost) everything is a circle.
                                        Bonus games are available which award stat boosts for a short time.
                                    </p>
                                </>
                            </p>
                        }
                    />
                </div>
                <div className="mx-auto w-full max-w-lg">
                    <Section
                        heading="Solitaire"
                        video={{
                            src: "/solitaire-demo.mp4",
                            poster: "/solitaire-poster.jpg",
                        }}
                        text={
                            <>
                                February 2023
                                <br />
                                TypeScript, PIXI, Gsap, WebSocket
                                <br />
                                <a href="https://github.com/Georgi-Vachev/solitaire-client" target="_blank" className="text-blue-500">
                                    GitHub
                                </a>
                            </>
                        }
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        Classic Solitaire Game that includes a WebSocket server which could be utilized by multiple clients.
                                    </p>
                                </>
                            </p>
                        }
                    />
                </div>
                <div className="mx-auto w-full max-w-lg">
                    <Section
                        heading="Sideways Shooter"
                        video={{
                            src: "/sideways-shooter-demo.mp4",
                            poster: "/sideways-shooter-poster.jpg",
                        }}
                        text={
                            <>
                                June 2020
                                <br />
                                Python, Pygame
                                <br />
                                <a href="https://github.com/Georgi-Vachev/sideways-shooter" target="_blank" className="text-blue-500">
                                    GitHub
                                </a>
                            </>
                        }
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        Simple 2D shooter game with a highscore system.
                                    </p>
                                </>
                            </p>
                        }
                    />
                </div>
            </div>
        </main >
    );
}
