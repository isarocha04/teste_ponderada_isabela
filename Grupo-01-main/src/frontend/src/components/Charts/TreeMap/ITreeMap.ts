import IComponent from '../../Component/IComponent';

export interface ITreeMapData {
  name?: string;
  size?: number;
  tagColor?: string;
  children?: ITreeMapData[];
}

export default interface ITreeMap extends IComponent {
  data: ITreeMapData[];
  singularItemName: string;
  pluralItemName: string;
}
