import { Alert, StyleSheet } from 'react-native';

import { AppButton } from '@/components/ui/Button';
import AppCard from '@/components/ui/Card/Card';
import { AppInput } from '@/components/ui/Input';
import { AppScreen } from '@/components/ui/Screen';
import { AppText } from '@/components/ui/Text';

import { Colors, Spacing } from '@/theme';

export default function HomeScreen() {
  return (
    <AppScreen style={styles.container}>

<AppCard
  style={{
    marginTop: Spacing.xl,
  }}
>
  <AppText variant="h3">
    Welcome Back 👋
  </AppText>

  <AppText
    color="textSecondary"
    style={{
      marginTop: Spacing.sm,
    }}
  >
    You're building the Pamoja Chama app!
  </AppText>
</AppCard>

      <AppText variant="h1" color="primary">
        Pamoja Chama
      </AppText>

      <AppText
        variant="body"
        color="textSecondary"
      >
        Building stronger communities together.
      </AppText>

      <AppInput 
        label="Phone Number"
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <AppButton
        title="Get Started"
        onPress={() => Alert.alert('Button Pressed')}
      />

    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 24,
    gap: 20,
  },
});