import './index.css'
export default function InputComponent({
  color,
  height,
  handleChange,
  placeholder,
}: {
  color?: string;
  height?: number;
  placeholder: string;
  handleChange: (value: string) => void;
}) {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      className="in"
      style={{
        border: `1px solid ${color}`,
        height: `${height}px`,
      }}
      placeholder={placeholder}
    />
  );
}
