export interface IDropdownOption {
  text: string;
  value?: string;
}
export default interface IDropdown {
  options: IDropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: CallableFunction;
}
