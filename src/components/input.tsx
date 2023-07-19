
interface inputProps {
    placeHolder: string;
    type: "text" | "password";
    name: string;
}

const Input = ({
    placeHolder,
    type="text",
    name,
}: inputProps) => {
   
    return (
        <label>
            <input 
                type={type}
                placeholder={placeHolder}
                name={name}
            />
        </label>
    )
}

export default Input;