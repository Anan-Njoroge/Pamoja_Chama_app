/**
 * ============================================================================
 * Login Screen Constants
 * ============================================================================
 *
 * PURPOSE
 * -------
 * Centralises all user-facing text and configuration used by the LoginScreen.
 *
 * Keeping text here makes it easy to:
 *
 * ✓ Update copy
 * ✓ Add localisation later
 * ✓ Avoid magic strings
 *
 * ============================================================================
 */

export const LOGIN_SCREEN = {
  title: 'Welcome to Pamoja Chama',

  subtitle:
    'Record contributions, monitor approvals and manage your Chama from anywhere.',

  phonePlaceholder: 'Enter your phone number',

  continueButton: 'Continue',

  demoSectionTitle: 'Quick Demo',

  demoSectionSubtitle:
    'Choose a demo account to experience the application.',

  invalidPhoneMessage:
    'Please enter a valid Kenyan phone number.',
};

export const LOGIN_VALIDATION = {

  /**
   * Kenyan phone numbers:
   *
   * 07XXXXXXXX
   * 01XXXXXXXX
   * +2547XXXXXXX
   * +2541XXXXXXX
   */
  phoneRegex:
    /^(?:\+254|0)(7\d{8}|1\d{8})$/,
};