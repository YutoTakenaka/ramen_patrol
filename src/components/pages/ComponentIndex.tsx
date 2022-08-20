import PrimaryButton from "../molecules/buttons/PrimaryButton";

export default function ComponentIndex() {
  const onClickBtn = () => {};

  return (
    <>
      <p className="flex items-center justify-center bg-gradient-to-t from-cyan-500 to-blue-500 h-20 w-screen text-white text-center text-3xl">
        コンポーネント一覧ページ
      </p>
      <div className="m-4 p-4 w-fit h-fit border-4 rounded-lg border-gray-400 flex-col justify-around items-center ">
        <p>Primary Button</p>
        <div className="mt-4">
          <PrimaryButton onClick={onClickBtn}>
            <p className="text-white">Primary</p>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
