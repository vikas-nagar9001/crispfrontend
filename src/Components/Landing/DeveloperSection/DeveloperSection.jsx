import React from 'react'

const DeveloperSection = () => {
    return (
        <>
            <section className="mt-16">
                <div className="flex flex-col text-center max-w-full text-[#052A11]">
                    <div className="self-center text-5xl font-semibold max-md:text-4xl">
                        Developer
                    </div>
                    <div className="mt-4 px-4 self-center sm:w-7/12 sm:text-xl text-base leading-9 max-m:max-w-96">
                        We now support 14 popular coding languages. At our core, LeetCode is about
                        developers. Our powerful development tools such as Playground help you
                        test, debug and even write your own projects online.
                    </div>
                </div>
            </section>

        </>
    )
}

export default DeveloperSection