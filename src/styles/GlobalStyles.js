import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#FFEB3B',  // Yellow
  secondary: '#2196F3',  // Blue
  background: '#f7f7f7',  // Light background for general views
  button: '#1E90FF',  // Blue for buttons
  text: '#333',  // Dark text color for better readability
  input: '#FFF',  // Input field background
  inputBorder: '#ddd', // Input field border color
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFD700', // Light background color for the screen
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1E90FF', // Dark text color
  },
  text: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '100%',
    backgroundColor: colors.input,
  },
  button: {
    backgroundColor: colors.button,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: colors.secondary,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
