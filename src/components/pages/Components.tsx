import { RadioGroup } from "@material-ui/core";
import React from "react";
import PrimaryButton from "../molecules/buttons/PrimaryButton";
import SecondaryButton from "../molecules/buttons/SecondaryButton";
import ComponentBox from "../molecules/ComponentBox";
import CheckBox from "../molecules/inputs/CheckBox";
import RadioButton from "../molecules/inputs/RadioButton";
import SelectBox from "../molecules/inputs/SelectBox";
import SwitchButton from "../molecules/inputs/Switch";
import TextBox from "../molecules/inputs/TextField";
import { Layout } from "../organisms/Layout";

const SELECT_ITEMS = [
  "1",
  "2",
  "3",
  // { id: "1", item: <MenuItem value={1}>1</MenuItem> },
  // { id: "2", item: <MenuItem value={2}>2</MenuItem> },
  // { id: "3", item: <MenuItem value={3}>3</MenuItem> },
  // { id: "4", item: <MenuItem value={4}>4</MenuItem> },
  // { id: "5", item: <MenuItem value={5}>5</MenuItem> },
];

export default function Components() {
  // Primary/SecondaryButtonのクリック時の処理
  const onClickBtn = () => {};
  // RadioButtonの処理
  const [radioValue, setRadioValue] = React.useState("");
  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };

  return (
    <Layout>
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
        <RadioGroup
          aria-label=""
          name=""
          value={radioValue}
          onChange={handleChangeRadio}
        >
          <RadioButton value="1">1</RadioButton>
          <RadioButton value="2">2</RadioButton>
        </RadioGroup>
      </ComponentBox>

      <ComponentBox>
        <p>SelectBox</p>
        <SelectBox
          title="Age"
          options={SELECT_ITEMS}
          helperText="This is Helper Text!"
        />
      </ComponentBox>

      <ComponentBox>
        <SwitchButton label="Switch Button" />
      </ComponentBox>

      <ComponentBox>
        <TextBox label="name" required={true} disabled={false} />
        <br />
        <TextBox label="email" required={false} disabled={false} />
        <br />
        <TextBox label="Birthday" required={false} disabled={true} />
      </ComponentBox>
    </Layout>
  );
}
