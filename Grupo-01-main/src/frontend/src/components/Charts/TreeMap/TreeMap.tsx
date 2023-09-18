import { ResponsiveContainer, Tooltip, Treemap } from 'recharts';
import ITreeMap from './ITreeMap';
import TreeMapCustomTooltip from './TreeMapTooltip/TreeMapCustomTooltip';
import TreeMapCustomContent from './TreeMapCustomContent/TreeMapCustomContent';
import TreeMapLegend from './TreeMapLegend/TreeMapLegend';

export default function TreeMap(props: ITreeMap) {
  return (
    <div className='flex h-full w-full overflow-auto'>
      <ResponsiveContainer>
        <Treemap
          data={props.data}
          dataKey='size'
          aspectRatio={6}
          stroke='#fff'
          content={<TreeMapCustomContent data={props.data} />}
          animationDuration={0}
        >
          <Tooltip
            content={
              <TreeMapCustomTooltip
                singularItemName={props.singularItemName}
                pluralItemName={props.pluralItemName}
              />
            }
          />
        </Treemap>
      </ResponsiveContainer>
      <TreeMapLegend {...props} />
    </div>
  );
}
