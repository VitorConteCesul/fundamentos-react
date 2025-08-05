import { useState } from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export function Home() {


  function handleAddProduct(){

  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Lista de Compras</Text>
      <Text style={style.todaysDate}>Quarta-feira, 17 de Julho de 2025</Text>

      <View style={style.form}>
        <TextInput style={style.input} 
          placeholder="Nome do Produto"
          placeholderTextColor="#BDBABA"
          keyboardType="email-address"
      />

      <TouchableOpacity style={style.button} onPress={handleAddProduct}>
          <Text style={style.textButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    padding: 24
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28.8,
    marginTop: 48
  },
  todaysDate: {
     color: "#000",
    fontSize: 16,
    fontWeight: "normal",
    lineHeight: 28.8,
  },
  input: {
    flex: 1,
    height: 56,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 18
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31C667",
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    color: "#fff",
    fontSize: 24, 
  }
})