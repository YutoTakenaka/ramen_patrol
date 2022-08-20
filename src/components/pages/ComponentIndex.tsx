import { RadioGroup } from "@material-ui/core";
import React from "react";
import PrimaryButton from "../molecules/buttons/PrimaryButton";
import SecondaryButton from "../molecules/buttons/SecondaryButton";
import ComponentBox from "../molecules/ComponentBox";
import CheckBox from "../molecules/inputs/CheckBox";
import RadioButton from "../molecules/inputs/RadioButton";

export default function ComponentIndex() {
  // Primary/SecondaryButtonのクリック時の処理
  const onClickBtn = () => {};
  // RadioButtonの処理
  const [value, setValue] = React.useState("female");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <p className="flex items-center justify-center bg-gradient-to-t from-pink-500 to-yellow-500 h-20 w-screen text-white text-center text-3xl">
        Ramen Patrol
      </p>
      <ComponentBox>
        <p>Primary Button</p>
        <PrimaryButton onClick={onClickBtn}>
          <div className="h-8 w-32 text-sm flex items-center justify-center">
            <p className="text-white">Primary</p>
          </div>
        </PrimaryButton>
      </ComponentBox>

      <ComponentBox>
        <p>Secondary Button</p>
        <SecondaryButton onClick={onClickBtn}>
          <div className="h-8 w-32 text-sm flex items-center justify-center">
            <p className="text-white">Secondary</p>
          </div>
        </SecondaryButton>
      </ComponentBox>

      <ComponentBox>
        <p>CheckBox</p>
        <CheckBox />
        <CheckBox>checkbox</CheckBox>
        <CheckBox labelPlacement="top">checkbox</CheckBox>
      </ComponentBox>

      <ComponentBox>
        <p>RadioButton</p>
        <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
          <RadioButton value="1">1</RadioButton>
          <RadioButton value="2">2</RadioButton>
        </RadioGroup>
      </ComponentBox>
    </>
  );
}
