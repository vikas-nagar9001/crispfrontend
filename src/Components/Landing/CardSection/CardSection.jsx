import cardbg from '/assets/images/Cards/cardbg.svg';
import card1 from '/assets/images/Cards/card1.svg';
import card2 from '/assets/images/Cards/card2.svg';
import card3 from '/assets/images/Cards/card3.svg';
import CardsComponent from './CardsComponent';

const CardSection = () => {
  return (

    <>

      {/*  Card Section start  */}

      <section className="md:bg-transparent bg-[#B2D1FE] sm:bg-[#B2D1FE] sm:pt-6 lg:pt-0  pb-14 relative lg:pb-20 md:pb-0">
        {/* Full-screen background image */}
        <img
          src={cardbg}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Full Screen Background"
        />
        {/* Main content container */}
        <div className=" sm:pt-0 pt-6 container mx-auto md:py-16 lg:py-20 relative">
          {/* Heading */}
          <h1 className="text-center sm:text-4xl text-2xl font-semibold mt-8 mb-10">
            We ve some awesome client <br /> And awesome case
          </h1>
          {/* <h1 class="text-center text-3xl font-bold mt-8 mb-4">And awesome case</h1> */}
          <div className="flex sm:flex-row justify-center content-center  flex-col flex-wrap lg:gap-6 sm:gap-6 gap-6 xl:gap-0 ">


            {/* Cards  */}
            <CardsComponent cimg={card1}
              chead="Online Practice Questions"
              cfpara=" Understand &nbsp;the importance of online practice for enhancing skills."
              cspara="Level up &nbsp;your coding skills through online practice. Explore reputable 
              platforms offering high-quality resources. Consistent practice and progress tracking 
              refine your abilities. Keep abreast of emerging trends and advancements in coding languages. " />
            <CardsComponent cimg={card2}
              chead="Logic Building."
              cfpara=" Refine&nbsp; problem-solving, explore strategies, seek guidance for professional success."
              cspara="Enhance&nbsp;problem-solving through targeted practice. Systematically break 
              down complex issues, explore diverse strategies, and seek guidance. Strengthen logical reasoning
               for success in programming, decision-making, and professional pursuits." />
            <CardsComponent cimg={card3}
              chead="Data structures and Algorithms."
              cfpara=" Data &nbsp;Structures and Algorithms: Key for Problem Solving and Coding."
              cspara="Data Structures&nbsp;
               and Algorithms form the bedrock of computer science, offering intricate
               solutions to complex problems. Mastery requires delving ,
               unlocking the potential for innovation and transformative problem-solving in software engineering and beyond." />
            {/* Cards  */}


          </div>
        </div>
      </section>

      {/*  Card Section ended  */}

    </>

  )
}

export default CardSection;