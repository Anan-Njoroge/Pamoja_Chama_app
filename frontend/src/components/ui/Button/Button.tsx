import React from 'react';

import {
  ActivityIndicator,
  Pressable,
  View,
} from 'react-native';

import { AppIcon } from '../Icon';
import { AppText } from '../Text';

import {
  Colors,
  type ColorKey,
} from '@/theme';

import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
} from './Button.constants';

import { styles } from './Button.styles';

import type {
  AppButtonProps,
} from './Button.types';

export function AppButton({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  fullWidth = true,
  style,
}: AppButtonProps) {
  const currentVariant = BUTTON_VARIANTS[variant];

  const currentSize = BUTTON_SIZES[size];

  const textColor: ColorKey = disabled
    ? 'disabledText'
    : currentVariant.textColor;

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled || loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: disabled
            ? Colors.disabled
            : Colors[currentVariant.backgroundColor],

          borderColor: Colors[currentVariant.borderColor],

          borderWidth: currentVariant.borderWidth,

          width: fullWidth ? '100%' : undefined,

          opacity: pressed ? 0.85 : 1,

          paddingVertical: currentSize.paddingVertical,

          paddingHorizontal: currentSize.paddingHorizontal,

          transform: [
            {
              scale: pressed ? 0.98 : 1,
            },
          ],
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={Colors[textColor]}
        />
      ) : (
        <View style={styles.content}>
          {leftIcon && (
            <View style={styles.leftIcon}>
              <AppIcon
                name={leftIcon}
                size={currentSize.iconSize}
                color={textColor}
              />
            </View>
          )}

          <AppText
            variant={currentSize.textVariant}
            color={textColor}
          >
            {title}
          </AppText>

          {rightIcon && (
            <View style={styles.rightIcon}>
              <AppIcon
                name={rightIcon}
                size={currentSize.iconSize}
                color={textColor}
              />
            </View>
          )}
        </View>
      )}
    </Pressable>
  );
}

AppButton.displayName = 'AppButton';