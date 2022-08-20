import PrimaryButton from "../molecules/buttons/PrimaryButton";
import SecondaryButton from "../molecules/buttons/SecondaryButton";

export default function ComponentIndex() {
  const onClickBtn = () => {};

  return (
    <>
      <p className="flex items-center justify-center bg-gradient-to-t from-pink-500 to-yellow-500 h-20 w-screen text-white text-center text-3xl">
        Ramen Patrol
      </p>
      <div className="m-4 p-4 w-fit h-fit border-4 rounded-lg border-gray-400 flex-col justify-around items-center ">
        <p>Primary Button</p>
        <div className="mt-4">
          <PrimaryButton onClick={onClickBtn}>
            <div className="h-8 w-32 text-sm flex items-center justify-center">
              <p className="text-white">Primary</p>
            </div>
          </PrimaryButton>
        </div>
      </div>
      <div className="m-4 p-4 w-fit h-fit border-4 rounded-lg border-gray-400 flex-col justify-around items-center ">
        <p>Secondary Button</p>
        <div className="mt-4">
          <SecondaryButton onClick={onClickBtn}>
            <div className="h-8 w-32 text-sm flex items-center justify-center">
              <p className="text-white">Secondary</p>
            </div>
          </SecondaryButton>
        </div>
      </div>
    </>
  );
}
