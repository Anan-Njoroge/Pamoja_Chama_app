import { Alert, StyleSheet } from 'react-native';

import { AppScreen } from '../components/ui/Screen';
import { AppText } from '../components/ui/Text';
import { AppButton } from '../components/ui/Button';

import { Colors } from '../theme';
import { AppInput } from '@/components/ui/Input';

export default function HomeScreen() {
  return (
    <AppScreen style={styles.container}>
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