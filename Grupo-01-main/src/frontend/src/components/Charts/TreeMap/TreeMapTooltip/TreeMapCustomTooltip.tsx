export default function TreeMapCustomTooltip(props: any) {
  const item =
    props && props.payload && props.payload[0] ? props.payload[0] : null;

  const name = item ? (item.payload ? item.payload.name : item.name) : '';

  const size = item ? item.value : 0;

  const root = item ? item.payload.root : null;

  const rootName = root ? root.name : '';
  const rootSize = root ? root.value : 0;

  const percentageOfTotal = root ? (size / rootSize) * 100 : 100;

  return (
    <div className='bg-white p-2 rounded-md w-64 flex flex-col'>
      <span className='font-semibold w-100 text-center'>{name}</span>
      <span className='font-light text-sm w-100 text-center'>
        {rootName ? `(${rootName})` : ''}
      </span>
      <span className='mt-2 w-100 text-center'>
        {size} {size == 1 ? props.singularItemName : props.pluralItemName}
      </span>
      <span className='w-100 text-center text-sm'>
        ({percentageOfTotal.toFixed(2)}%)
      </span>
    </div>
  );
}
