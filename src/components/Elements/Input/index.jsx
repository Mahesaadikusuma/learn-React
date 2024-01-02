import Input from "./Input";
import Label from "./Label";



const InputForm = (props) => {
     const {label,name, type, placeholder} = props;
  return (
    <div className="mb-5">
     <Label htmlFor={name}>{label}</Label>
     <Input type={type} placeholder={placeholder} name={name} id={name}/>
    </div>
  );
};

export default InputForm;
