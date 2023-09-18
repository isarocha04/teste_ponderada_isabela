import ITreeMap, { ITreeMapData } from '../ITreeMap';
import { uuidv4 } from '../../../../helpers/uuidv4';
export default function TreeMapLegend(props: ITreeMap) {
  const getSingularOrPluralItemName = (
    size: number,
    singularItemName: string = props.singularItemName,
    pluralItemName: string = props.pluralItemName
  ) => {
    return size == 1 ? singularItemName : pluralItemName;
  };

  const projectsAmount = getElementsSize(props.data);

  return (
    <div className='h-full overflow-hidden w-2/6 ml-5 flex flex-col'>
      <div className='mb-5'>
        <span className='font-semibold text-5xl'>{projectsAmount}</span>{' '}
        {getSingularOrPluralItemName(projectsAmount)}
        {' até agora!'}
      </div>
      <div className='flex-grow overflow-y-auto'>
        {props.data.map((element, index) => {
          const size = element.size ? element.size : getElementSize(element);
          return (
            <div className='mb-7' key={uuidv4()}>
              <span>
                <span className='font-semibold'>
                  {index + 1}. {element.name}
                </span>
                <span className='ml-1 font-light text-sm block'>
                  ({size} {getSingularOrPluralItemName(size)})
                </span>
              </span>
              {element.children ? (
                <div className='flex flex-wrap w-full'>
                  {element.children
                    .sort((a, b) => (b.size as number) - (a.size as number))
                    .map((child) => {
                      child.size = getElementSize(child);
                      return (
                        <div
                          className='my-2 flex flex-col w-1/3'
                          key={uuidv4()}
                        >
                          <span className='w-full text-center text-sm text-gray'>
                            <span className='font-semibold'>{child.name}</span>
                            <span className='block font-light text-xs'>
                              {child.size}{' '}
                              {getSingularOrPluralItemName(child.size)}
                            </span>
                          </span>
                        </div>
                      );
                    })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getElementsSize(elements: ITreeMapData[]): number {
  return elements.reduce((total, element) => {
    return total + getElementSize(element);
  }, 0);
}

function getElementSize(props: ITreeMapData): number {
  if (props.size) {
    return props.size;
  } else if (!props.children) {
    return 0;
  }

  return props.children.reduce((total, child) => {
    return (
      (child.size
        ? child.size
        : child.children
        ? getElementsSize(child.children)
        : 0) + total
    );
  }, 0);
}
