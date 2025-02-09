import progressbg from "/assets/images/progress/progressbg.svg";
import image from "/assets/images/progress/image.png";

const Progress = (props) => {
    return (
        <>
            {/* Progress section start  */}
            <section
                className="mt-20 bg-cover bg-center"
                style={{ backgroundImage: `url(${progressbg})` }}
            >
                <div className="container mx-auto px-4 py-10">
                    {/* Heading */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
                            Start from Scratch,{" "}
                            <span
                                className="text-xl sm:text-2xl md:text-3xl lg:text-5xl bg-black text-white px-4 py-2 align-bottom pt-6 leading-loose"
                                style={{
                                    whiteSpace: "nowrap",
                                    borderRadius: "60% 36% 49% 28%",
                                    padding: "10px 20px"
                                }}
                            >
                                Build Up expertise
                            </span>
                        </h1>
                    </div>
                    {/* Paragraph */}
                    <div className="flex justify-center text-center mt-2">
                        <p className="text-sm sm:text-xl max-w-[38rem] min-w-[19rem] text-center justify-center leading-relaxed mb-8">
                            We are more than just course provider. We guide you through all four
                            stages of learning and evaluation.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center sm:mt-28 md:mt-20">
                        <img
                            src={image}
                            className="max-h-[22rem] min-h-[4rem] max-w-[119rem] min-w-[22rem]"
                            alt="Image"
                        />
                    </div>
                </div>
            </section>
            {/* Progress section end  */}
        </>
    )
}

export default Progress;