/**
 * ============================================================================
 * AppInput
 * ============================================================================
 *
 * Enterprise reusable input component.
 *
 * FEATURES
 * --------
 * ✓ Label
 * ✓ Required indicator
 * ✓ Helper text
 * ✓ Error state
 * ✓ Success / Warning state
 * ✓ Left icon
 * ✓ Right icon
 * ✓ Password visibility toggle
 * ✓ Clear button
 * ✓ Focus state
 * ✓ AppSurface integration
 * ✓ Fully typed
 * ✓ Accessible
 *
 * ============================================================================
 */

import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  TextInput,
  View,
} from 'react-native';

import { AppSurface } from '../Surface';
import { AppIcon } from '../Icon';
import { AppText } from '../Text';

import {
  Colors,
} from '@/theme';

import {
  INPUT_STATE_COLORS,
} from './Input.constants';

import {
  styles,
} from './Input.styles';

import type {
  AppInputProps,
} from './Input.types';

export const AppInput = forwardRef<TextInput, AppInputProps>(({

  label,

  helperText,

  error,

  required = false,

  state = 'default',

  variant = 'filled',

  leftIcon,

  rightIcon,

  clearable = false,

  secureTextEntry = false,

  editable = true,

  value,

  containerStyle,

  onFocus,

  onBlur,

  onChangeText,

  accessibilityLabel,

  accessibilityHint,

  ...props

}, ref) => {

  /**
   * --------------------------------------------------------------------------
   * Internal Ref
   * --------------------------------------------------------------------------
   */

  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => inputRef.current as TextInput);

  /**
   * --------------------------------------------------------------------------
   * Local State
   * --------------------------------------------------------------------------
   */

  const [focused, setFocused] = useState(false);

  const [hidden, setHidden] = useState(secureTextEntry);

  /**
   * --------------------------------------------------------------------------
   * Derived Values
   * --------------------------------------------------------------------------
   */

  const colors =
    INPUT_STATE_COLORS[
      error ? 'error' : state
    ];

  const borderColor =
    focused
      ? Colors.primary
      : Colors[colors.border];

  const helperColor =
    Colors[
      error
        ? 'danger'
        : colors.helper
    ];

  /**
   * --------------------------------------------------------------------------
   * Event Handlers
   * --------------------------------------------------------------------------
   */

  function handleFocus(
    e: Parameters<
      NonNullable<
        AppInputProps['onFocus']
      >
    >[0],
  ) {

    setFocused(true);

    onFocus?.(e);

  }

  function handleBlur(
    e: Parameters<
      NonNullable<
        AppInputProps['onBlur']
      >
    >[0],
  ) {

    setFocused(false);

    onBlur?.(e);

  }

  function clearInput() {

    onChangeText?.('');

  }

  return (

    <View style={containerStyle}>

      {label && (

        <AppText
          variant="small"
          color={
            error
              ? 'danger'
              : focused
              ? 'primary'
              : 'textSecondary'
          }
          style={styles.label}
        >
          {label}

          {required && (
            <AppText
              color="danger"
            >
              {' '}*
            </AppText>
          )}

        </AppText>

      )}

      <AppSurface
        variant="card"
        style={[
          styles.inputContainer,
          {
            borderColor,
            backgroundColor: editable
              ? Colors.surface
              : Colors.background,
          },
        ]}
      >
              {leftIcon && (
          <View style={styles.iconLeft}>
            <AppIcon
              name={leftIcon}
              color={
                focused
                  ? 'primary'
                  : 'textPlaceholder'
              }
              size="md"
            />
          </View>
        )}

        <TextInput
          ref={inputRef}
          value={value}
          editable={editable}
          style={styles.input}
          secureTextEntry={hidden}
          placeholderTextColor={Colors.textPlaceholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          {...props}
        />

        {secureTextEntry && (
          <View style={styles.iconRight}>
            <AppIcon
              name={
                hidden
                  ? 'eye'
                  : 'eye-off'
              }
              size="md"
              color="textPlaceholder"
              onPress={() =>
                setHidden(!hidden)
              }
            />
          </View>
        )}

        {!secureTextEntry &&
          clearable &&
          value &&
          value.length > 0 && (
            <View style={styles.iconRight}>
              <AppIcon
                name="close"
                size="md"
                color="textPlaceholder"
                onPress={clearInput}
              />
            </View>
          )}

        {!secureTextEntry &&
          !clearable &&
          rightIcon && (
            <View style={styles.iconRight}>
              <AppIcon
                name={rightIcon}
                size="md"
                color="textPlaceholder"
              />
            </View>
          )}
      </AppSurface>

      {(error || helperText) && (
        <AppText
          variant="caption"
          color={
            error
              ? 'danger'
              : 'textPlaceholder'
          }
          style={[
            styles.helper,
            {
              color: helperColor,
            },
          ]}
        >
          {error ?? helperText}
        </AppText>
      )}
    </View>
  );
});

AppInput.displayName = 'AppInput';