import "./search-box.style.css";
import { ChangeEventHandler } from "react";

interface SearchBoxProps {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
  return (
    <input
      type="search"
      className={className}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
