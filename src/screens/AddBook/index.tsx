import React from 'react'
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '../../styles/colors';

export default function AddBook() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={[colors.firstLinearColor, colors.secondLinearColor, colors.thirdLinearColor]} style={styles.linearGradient}>
        <ScrollView >
          
            <Text style={styles.title}>Add a new book</Text>

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} />
            
            <Text style={styles.label}>Author</Text>
            <TextInput style={styles.input} />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input, { height: 110 }]}
              multiline
            />

            <RectButton style={styles.Button}>
              <Text style={styles.ButtonText}>Add a new book</Text>
            </RectButton>
        </ScrollView>

          </LinearGradient>
        
     </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 5,
    padding: 24,
  },
  container: {
    flex: 1,
    width: '100%',
  },

  title: {
    color: colors.red,
    fontSize: 24,
    paddingTop: 30,
    marginBottom: 32,
    paddingBottom: 24,
  },

  label: {
    fontSize: 16,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    color: colors.black,
    backgroundColor: colors.white,
    borderWidth: 1.4,
    borderColor: colors.inputBorderColor,
    borderRadius: 10,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: "top",
  },

  Button: {
    backgroundColor: colors.red,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    marginTop: 32,
  },

  ButtonText: {
    fontSize: 24,
    color: colors.white,
  },
});