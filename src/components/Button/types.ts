import { TouchableOpacityProps } from 'react-native';

export interface ContainerProps extends TouchableOpacityProps {
  buttonStyle: 'default' | 'primary';
}
