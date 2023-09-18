import IListStatus from './IListStatus';

export default function ListStatus(props: IListStatus) {
  var imagem = '';
  if (props.status == 'ACCEPTED') {
    imagem = '/public/imagens/aprovado.png';
  } else if (props.status == 'DENIED') {
    imagem = '/public/imagens/reprovado.png';
  } else {
    imagem = '/public/imagens/analise.png';
  }

  return (
    <li>
      <div className='flex flex-col place-items-end mx-2 gap-1'>
        <img src={imagem} alt='' className='w-32' />
        <img />
      </div>
    </li>
  );
}

//"/src/components/imgs/Reprovado.png"
