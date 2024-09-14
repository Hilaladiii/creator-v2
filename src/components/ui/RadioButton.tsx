import Image from "next/image";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface RadioButtonProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  value: string;
  logo: string;
  register: UseFormRegister<T>;
}

const RadioButton = <T extends FieldValues>({
  label,
  name,
  value,
  logo,
  register,
}: RadioButtonProps<T>) => {
  return (
    <label
      htmlFor={value}
      className="w-full ring-[0.5px] ring-gray10 py-2 px-6 rounded-md flex items-center justify-between"
    >
      <div className="flex items-center">
        <input type="radio" id={value} {...register(name)} value={value} />
        <p className="ml-4">{label}</p>
      </div>
      <div className="ring-[0.5px] ring-netural50 p-2 rounded-sm ">
        <Image alt={value} src={logo} width={30} height={25} />
      </div>
    </label>
  );
};

export default RadioButton;
