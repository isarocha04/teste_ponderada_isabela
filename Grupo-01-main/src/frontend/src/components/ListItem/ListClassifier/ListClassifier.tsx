import IListClassifier from './IListClassifier';

export default function ListClassifier(props: IListClassifier) {
  return (
    <li className='flex flex-col w-1/4'>
      <span>
        <span className='text-xs block'>{props.moduleName}</span> 
        <span className='font-semibold text-sm'>{props.courseName}</span> 
        {/* -
        {props.competences.reduce((total, current) => total + current.rate, 0) /
          props.competences.length} */}
      </span>
      {/* <div className='w-full flex flex-wrap'>
        {props.competences.map((competence) => {
          return (
            <span className='text-sm mx-2'>
              <span className='text-xs'>{competence.name}</span>:{' '}
              <span className='font-semibold'>{competence.rate}</span>
            </span>
          );
        })}
      </div> */}
      {/* <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group">
                <p>Classificações</p>
                <span className="border-l p-2 hover:bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 32 19" fill="none">
                    <path d="M14.3863 18.187C15.2788 19.0795 16.7283 19.0795 17.6209 18.187L31.3306 4.47729C32.2231 3.58473 32.2231 2.13522 31.3306 1.24266C30.438 0.350103 28.9885 0.350103 28.0959 1.24266L16 13.3386L3.90405 1.2498C3.01149 0.357242 1.56198 0.357242 0.669419 1.2498C-0.22314 2.14236 -0.22314 3.59187 0.669419 4.48443L14.3791 18.1941L14.3863 18.187Z" fill="#2E2640"/>
                    </svg>
                </span>
                <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                    <ul className="text-left border rounded">
                        <DropdownOption competencia="EMFE" rating={props.rateAderencia}/>
                        <DropdownOption competencia="EE" rating={props.rateComplex}/>
                        <DropdownOption competencia="EMFE" rating={props.rateComp1}/>
                        <DropdownOption competencia="EMFE" rating={props.rateComp2}/>
                        <DropdownOption competencia="EMFE" rating={props.rateComp3}/>
                    </ul>
                </div>
            </button> */}
    </li>
  );
}
