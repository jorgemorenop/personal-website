import PageSection from "./PageSection";
import Image from "next/image";

export default function About() {
    return (
        <PageSection sectionName="About me" sectionId="about">
            <div className="flex space-y-10 justify-center flex-wrap align-middle h-full">
                <div className="mx-16">
                    <Image
                        className="rounded-full"
                        height={400}
                        width={400}
                        src="/profile_image_medium.jpeg"
                        alt="Profile image"
                    />
                </div>

                <div>
                    <p style={{fontSize: "x-large", textAlign: "center"}}> Hi 👋</p>
                    <p style={{textAlign: "center", verticalAlign: "middle"}} className="w-auto">


                        <br/>
                        Mi name is Jorge Moreno, and I am a data engineer.
                        <br/>
                        <br/>
                        I am currently working as a freelance in a per-project basis,
                        so feel free to contact me if you feel I could be of help with anything you have 🙂 (see below
                        for more info)

                        <br/>
                        <br/>
                        <br/>
                        <i>About this site</i>
                        <br/>
                        <br/>
                        Although it is nice having a place of my own to write
                        whatever I need, I must recognize that one of the main reasons for this to exist was that I
                        wanted
                        to improve a bit my skills with React, Next.js, and web development in general (which were close
                        to non-existent).
                        <br/>
                        <br/>
                        The web source code is publicly available in <a className="link" href="https://github.com/jorgemorenop/personal-website">Github</a>.

                    </p>
                </div>

            </div>
        </PageSection>
    )
}
