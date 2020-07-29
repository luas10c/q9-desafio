import { ImageSourcePropType } from 'react-native';
import {
  ViewProps,
  ScrollViewProps,
  TouchableOpacityProps
} from 'react-native';

export interface NavigationProps extends ViewProps {
  items: any[];
  onChangeItem: (value: string | undefined) => void;
}

export interface ListProps extends ScrollViewProps {
  items: any[];
  onChangeItem: (value: string | undefined) => void;
}

export interface ItemProps extends TouchableOpacityProps {
  label?: string;
  image?: ImageSourcePropType;
  onChangeItem: () => void;
  isActive?: boolean;
}
