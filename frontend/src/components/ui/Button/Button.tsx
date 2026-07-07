import React from 'react';
import {
  Pressable,
  ActivityIndicator,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { AppText } from '../Text';
import { Colors } from '../../../theme';
import { Radius } from '../../../theme';
import { Sizes } from '../../../theme';

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'outline';

interface AppButtonProps {
  title: string;
  onPress: () => void;

  variant?: Variant;

  disabled?: boolean;

  loading?: boolean;

  style?: StyleProp<ViewStyle>;
}

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  style,
}: AppButtonProps) {
  const buttonStyle = [
    styles.button,
    variantStyles[variant],
    disabled && styles.disabled,
    style,
  ];

  const textColor =
    variant === 'outline'
      ? Colors.primary
      : Colors.white;

  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <AppText
          variant="button"
          style={{ color: textColor }}
        >
          {title}
        </AppText>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: Sizes.buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.sm,
  },

  disabled: {
    backgroundColor: Colors.disabled,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
  },

  secondary: {
    backgroundColor: Colors.primaryLight,
  },

  success: {
    backgroundColor: Colors.success,
  },

  danger: {
    backgroundColor: Colors.danger,
  },

  outline: {
    backgroundColor: Colors.transparent,
    borderWidth: 1.5,
    borderColor: Colors.primary,
  },
});