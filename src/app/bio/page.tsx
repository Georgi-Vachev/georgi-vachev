import Section from "@/components/Section";

export default function Bio() {
    return (
        <main className="container mx-auto p-4 space-y-8">
            <Section
                image={{
                    src: "/profile.jpg",
                    alt: "Profile picture",
                    width: 128,
                    height: 128,
                    className: "rounded-lg",
                }}
                text="Hi, I'm Georgi, a 28-year-old front-end developer from Sofia. On this page, you'll find a brief overview of my technical background, a bit about myself, and some of my favorite projects. If you like what you see, feel free to contact me anytime!"
                dropdownContent={
                    <>
                        <p className="text-slate-400">+359 879034910</p>
                        <p className="text-slate-400">wachhew96@gmail.com</p>
                        <p>
                            <a
                                href="https://github.com/Georgi-Vachev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                GitHub
                            </a>
                        </p>
                        <p>
                            <a
                                href="https://www.linkedin.com/in/georgi-vachev-a42746168/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mx-auto w-full max-w-lg">
                    <Section
                        heading="Professional Experience"
                        headingImage={{
                            src: "/academic-icon.jpg",
                            alt: "Experience Icon",
                            width: 24,
                            height: 24,
                        }}
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        <strong>Game2Slot (2024-present):</strong> Played an integral role in a dynamic startup environment by developing a slot game base engine and several games designed to run on it. Addressed key technical challenges such as component layering and UI state management, while collaborating closely with cross-functional teams.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>Amusnet Interactive (2022-2024):</strong> Developed features for new and existing games, and fixed visual and functional bugs in games that were either in development or already released, ensuring ongoing maintenance through regular updates.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>DXC Technology (2020-2022):</strong> Troubleshooting MSSQL-related issues, collaborating with colleagues from my and other teams to solve various issues together, and communicating with clients.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>Early Roles (Pre‑2020):</strong> Worked as a Client Consultant at Easy Credit and an Article Classifier/Analyst at Sigma News Ventures.
                                    </p>
                                </>
                            </p>
                        }
                    />
                </div>
                <div className="mx-auto w-full max-w-lg">
                    <Section
                        heading="Education"
                        headingImage={{
                            src: "/academic-icon.jpg",
                            alt: "Academic Icon",
                            width: 24,
                            height: 24,
                        }}
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        <strong>VUTP – Computer Administration of Software Applications:</strong> Learned networking, server management, multiple programming languages, and databases.
                                        <em> (Coming soon: Reapplying for a Cybersecurity bachelor at VUTP.)</em>
                                    </p>
                                    <br />
                                    <p>
                                        <strong>SU Kliment Ohridski – Mathematics (1 year):</strong> Briefly pursued a passion for numbers before deciding to start solving software problems instead of mathematical ones.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>SPGE Djon Atanasov (2010–2015):</strong> Studied renewable energy sources as part of my high school curriculum.
                                    </p>
                                </>
                            </p>
                        }
                    />
                </div>
                <div className="mx-auto w-full max-w-lg md:col-span-full">
                    <Section
                        heading="Hobbies & Future Goals"
                        headingImage={{
                            src: "/academic-icon.jpg",
                            alt: "Hobbies Icon",
                            width: 24,
                            height: 24,
                        }}
                        dropdownContent={
                            <p className="text-slate-400">
                                <>
                                    <p>
                                        <strong>Personal Interests:</strong> I enjoy assembling metal models, exploring small-space gardening, reading, and occasionally playing games.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>Future Objectives:</strong> Plan to master asset creation with Photoshop/Spine and dive into backend technologies.
                                    </p>
                                    <br />
                                    <p>
                                        <strong>Outlook:</strong> My goal over the next 5–10 years is to broaden my technical perspective by learning how backend development, DevOps, and the entire tech stack operate - even if my focus remains on the front end, as I believe this will ultimately make me a better engineer.
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
