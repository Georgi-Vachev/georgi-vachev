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
                        text="TypeScript, PIXI, React, Python, MongoDB"
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
                        text="TypeScript, PIXI, React"
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
                <div className="mx-auto w-full max-w-lg md:col-span-full">

                </div>
            </div>
        </main >
    );
}
