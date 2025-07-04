export default function CheckboxComponent({
  checkboxvalue,
  handleChange,
  selectedHobbies
}: {
  checkboxvalue: string;
  handleChange: (val: string[]) => void;
  selectedHobbies:string[]
}) {

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked=e.target.checked

    let updatedHobbies: string[]
    if(checked){
      updatedHobbies =[...selectedHobbies,checkboxvalue]
      console.log("updated",updatedHobbies)
    }else{
      updatedHobbies=selectedHobbies.filter((val)=>val!== checkboxvalue)
      console.log("deleted",updatedHobbies)
    }
    handleChange(updatedHobbies)
  };

  return (
     <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={checkboxvalue}
        onChange={ handleCheckboxChange}
      />
      <label htmlFor={checkboxvalue}> {checkboxvalue}</label>
    </div>
  );
}
