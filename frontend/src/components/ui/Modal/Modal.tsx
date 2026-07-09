/**
 * ============================================================================
 * AppModal
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Reusable modal component for dialogs, confirmations and forms.
 *
 * Built on top of:
 * ✓ React Native Modal
 * ✓ AppSurface
 * ✓ AppText
 * ✓ AppIcon
 *
 * ============================================================================
 */

import React from 'react';

import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { AppSurface } from '../Surface';
import { AppText } from '../Text';
import { AppIcon } from '../Icon';

import {
  Colors,
  Radius,
  Spacing,
} from '@/theme';

import type {
  ViewComponentProps,
} from '@/types';

export interface AppModalProps extends ViewComponentProps {
  /**
   * Controls modal visibility.
   */
  visible: boolean;

  /**
   * Modal title.
   */
  title?: string;

  /**
   * Called when modal should close.
   */
  onClose: () => void;

  /**
   * Whether tapping outside dismisses the modal.
   */
  dismissible?: boolean;

  /**
   * Show close icon.
   */
  showCloseButton?: boolean;

  /**
   * Scroll long content.
   */
  scrollable?: boolean;

  children: React.ReactNode;
}

export function AppModal({
  visible,
  title,
  onClose,
  dismissible = true,
  showCloseButton = true,
  scrollable = false,
  children,
}: AppModalProps) {
  const Content = scrollable ? ScrollView : View;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        style={styles.overlay}
        onPress={() => {
          if (dismissible) {
            onClose();
          }
        }}
      >
        <Pressable onPress={() => {}}>
          <AppSurface
            variant="card"
            elevation="lg"
            style={styles.modal}
          >
            {(title || showCloseButton) && (
              <View style={styles.header}>
                <AppText
                  variant="h3"
                  style={styles.title}
                >
                  {title}
                </AppText>

                {showCloseButton && (
                  <Pressable
                    onPress={onClose}
                    hitSlop={8}
                  >
                    <AppIcon
                      name="close"
                      size="lg"
                      tone="muted"
                    />
                  </Pressable>
                )}
              </View>
            )}

            <Content
              style={scrollable ? undefined : styles.content}
              contentContainerStyle={
                scrollable
                  ? styles.scrollContent
                  : undefined
              }
              showsVerticalScrollIndicator={false}
            >
              {children}
            </Content>
          </AppSurface>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

AppModal.displayName = 'AppModal';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },

  modal: {
    width: '100%',
    maxWidth: 500,
    maxHeight: '85%',
    borderRadius: Radius.lg,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: Spacing.md,
  },

  title: {
    flex: 1,
    marginRight: Spacing.md,
  },

  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },

  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
  },
});