import leafright from '/assets/images/awards/leafright.svg';
import leafleft from '/assets/images/awards/leafleft.svg';

const CircleComponent = ({ award }) => {
  return (
    <div className="flex flex-col justify-center m-8 text-center">
      <img
        alt=""
        className="self-center mb-6 flex-shrink-0 w-24 h-24 bg-center bg-cover rounded-full dark:bg-transparent"
        src={award.imageurl}
      />
       <img
            alt="leaf-img"
            className="absolute place-self-center mr-20 flex-shrink-0 w-32 h-32 mb-2 bg-center bg-cover rounded-full dark:bg-transparent"
            src={leafleft}
          />

          <img
            alt="leaf-img"
            className="absolute place-self-center ml-20 flex-shrink-0 w-32 h-32 mb-2 bg-center bg-cover rounded-full dark:bg-transparent"
            src={leafright}
          />
      <div className="text-xl font-normal leading">{award.name}</div>
    </div>
  );
}

export default CircleComponent;
