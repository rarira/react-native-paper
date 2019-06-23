import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ThemeShape } from '../types';

export interface ModalProps {
  dismissable?: boolean;
  onDismiss?: () => any;
  visible: boolean;
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  theme?: ThemeShape;
  wrapperStyle?: StyleProp<ViewStyle>;
}

export declare class Modal extends React.Component<ModalProps> {}
