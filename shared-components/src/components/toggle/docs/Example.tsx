import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { RadioToggleInput } from "../RadioToggle";
import { FieldSet } from "../FieldSet";

const options = ["I går", "I dag", "I morgen"];
const fieldName = "fieldName";

export const Example: FC = () => {
  const { register, watch } = useForm({ mode: "onChange", defaultValues: { fieldName: options[1] } });
  const allFields = watch();
  console.log(allFields);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <FieldSet legend="Velg dag" name={fieldName}>
        {options.map((option) => (
          <RadioToggleInput {...register(fieldName)} value={option} label={option} key={option} />
        ))}
      </FieldSet>
    </form>
  );
};
