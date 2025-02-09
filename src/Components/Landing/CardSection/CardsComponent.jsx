import cardelement from "/assets/images/Cards/cardelement.svg"

const Card = (props) => {
  return (

    <>

      {/* Card start */}
      <div
        style={{ borderRadius: "16px 16px 8px 8px" }}
        className="sm:h-[22.12rem] sm:w-[24.31rem] h-[19rem] w-[20rem] shadow-xl  relative mx-4 bg-white overflow-hidden "
      >
        <div className="default w-full">
          <img
            className="sm:w-9 w-8 sm:h-9 h-8  sm:m-4 m-4 absolute"
            src={props.cimg}
            alt=""
          />
          <div className="sm:h-[71px] h-[60px] sm:text-lg text-base  text-white font-semibold float-center text-center pt-5">
            {props.chead}
          </div>
        </div>
        <div className="p-4">
          <div className="font-normal sm:text-base text-sm text-black ">
            {props.cfpara}
          </div>
          <br />
          <div className="font-normal sm:text-base text-sm text-black absolute pr-9">
            {props.cspara}
          </div>
          <div className="absolute sm:pt-28 pt-[6rem]  sm:pl-72 pl-[15rem]  sm:h-20 h-20 sm:w-96 w-80  ">
            <img
              className="sm:h-20 h-[71px] sm:w-20 w-[62px]"
              src={cardelement}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Card end */}

    </>

  )
}

export default Card;