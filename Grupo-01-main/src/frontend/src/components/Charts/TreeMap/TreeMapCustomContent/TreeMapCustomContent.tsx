const colors =  {
  'inteli-blue': '#124AED',
  lightBlue: '#8C8895',
  gray: '#5E586B',
  lightGreen: '#14A695',
  green: '#035A50',
  blackGreen: '#05432E',
  yellow: '#C9851E',
  lightPurple: '#A183E3',
  purple: '#2E2640',
  blackPurple: '#161220',
  white: '#F2F2F2',
  lightGray: '#E5E7EB',
  red: '#FF4545',
  'inteli-orange': '#FF922B'
};

export default function TreeMapCustomContent(props: any) {
  let fillColor:string = "";

  if(props.root.tagColor) {
    fillColor = (colors as any )[props.root.tagColor]
  }

  if(!fillColor) {
    fillColor = colors.gray;
  }


  const fontColor = fillColor === '#cccfd1' ? '#000' : '#fff';

  return (
    <g>
      <rect
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
        style={{
          fill: fillColor,
          strokeWidth: 2 / (props.depth + 1e-10),
          strokeOpacity: 1 / (props.depth + 1e-10),
        }}
      />
      {!props.children ? (
        <text
          x={props.x + props.width / 2}
          y={props.y + props.height / 2 + 7}
          textAnchor='middle'
          fill={fontColor}
          stroke={fontColor}
          fontSize={14}
        >
          {props.name}
        </text>
      ) : null}
      {props.depth === 1 ? (
        <text
          x={props.x + 4}
          y={props.y + 18}
          fill={fontColor}
          stroke={fontColor}
          fontSize={16}
          fillOpacity={0.9}
        >
          {props.index + 1}
        </text>
      ) : null}
    </g>
  );
}
