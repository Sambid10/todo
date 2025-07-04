export default function RadioButtonComponent({
  handleChange,
  gendervalue,
}: {
  handleChange: (value: string) => void;
   gendervalue: string;
}) {
  return (
      <div 
      style={{
        display:"flex",
        gap:"4px"
      }}>
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="radio"
          id={gendervalue}
          name="sex"
          value={gendervalue}
        />
        <label htmlFor={gendervalue}>{gendervalue}</label>
      </div>
  );
}
