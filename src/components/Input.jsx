import { useState, useEffect } from "react";
import "../styles/Input.css";

export default function Input({
  label,
  placeholder,
  onChange,
  className,
  type,
  rows,
  maxlength,
  value,
}) {
  const [fieldValue, setFieldValue] = useState(value);

  useEffect(() => {
    setFieldValue(value);
  }, [value]);

  function handleInputChange(e) {
    setFieldValue(e.target.value);
    onChange(e.target.value);
  }

  function handleTextAreaChange(e) {
    setFieldValue(e.target.value);
    onChange(e.target.value);
    e.target.style.height = `${e.target.scrollHeight - 10}px`;
  }

  if (type === "textarea") {
    return (
      <div className={className}>
        <textarea
          value={fieldValue}
          placeholder={placeholder}
          onChange={handleTextAreaChange}
          rows={rows}
          maxLength={maxlength}
        ></textarea>
      </div>
    );
  }

  return (
    <div className={className}>
      <input
        type={type || "text"}
        value={fieldValue}
        placeholder={placeholder}
        onChange={handleInputChange}
      ></input>
      <label>{label} </label>
    </div>
  );
}
