import PageSection from "./PageSection";

export default function About() {
    return (
        <PageSection sectionName="About me" sectionId="about">
            <div className="flex space-y-10 justify-center flex-wrap align-middle h-full">
                <div className="mx-16">
                    <img
                        className="rounded-full"
                        height={400}
                        width={400}
                        src="/profile_image.jpeg"
                    />
                </div>

                {/*<div className="flex max-w-md align-middle h-fit ">*/}

                <div>
                    <p style={{fontSize: "x-large", textAlign: "center"}}> Hi 👋</p>
                    <p style={{textAlign: "center", verticalAlign: "middle", maxHeight: 400}} className="w-auto">


                        <br/>
                        Mi name is Jorge Moreno, and I'm a data engineer.
                        <br/>
                        <br/>
                        I'm currently working as a freelance in a per-project basis,
                        so feel free to contact me if you feel I could be of help with anything you have 🙂 (see below
                        for more info)

                        <br/>
                        <br/>
                        <br/>
                        <i>About this site</i>
                        <br/>
                        <br/>
                        Although it's nice having a place of my own to write
                        whatever I need, I must recognize that one of the main reasons for this to exist was that I
                        wanted
                        to improve a bit my skills with React, Next.js, and web development in general (which were close
                        to non-existent).

                    </p>
                </div>

            </div>
        </PageSection>
    )
}
