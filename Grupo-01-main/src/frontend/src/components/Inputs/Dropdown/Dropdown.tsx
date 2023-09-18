import { uuidv4 } from '../../../helpers/uuidv4';
import IDropdown from './IDropdown';

export default function Dropdown(props: IDropdown) {
  const onChange = (event: any) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <select
      onChange={onChange}
      defaultValue={props.defaultValue}
      value={props.value}
      className='w-full rounded-none'
    >
      {props.options.map((option) => {
        return (
          <option
            key={uuidv4()}
            value={option.value ? option.value : option.text}
            className='active:bg-black'
          >
            {option.text}
          </option>
        );
      })}
    </select>
  );
}
