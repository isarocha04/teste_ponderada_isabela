import IMenuOptions from './IMenuOptions';

export default function MenuOptions(props: IMenuOptions) {
  return (
    <ul className='flex flex-row flex-auto max-w border-t-2 border-b-1 justify-between border-lightGray shadow-md'>
      {props.children}
    </ul>
  );
}
