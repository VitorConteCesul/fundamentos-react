import { useState } from "react"
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import {Product}  from "../../components/Product"

import { style } from "./styles";


export function Home() {
    const products = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Farinha de Trigo",
    "Açúcar",
    "Sal",
    "Óleo de Soja",
    "Leite",
    "Ovos",
    "Pão",
    "Café",
    "Chá",
    "Manteiga",
    "Queijo",
    "Presunto",
    "Frango",
    "Carne Bovina",
    "Peixe",
    "Frutas",
    "Legumes",
    "Verduras",
    "Batata",
    "Cebola",
    "Alho",
    "Tomate",
    "Cenoura",
    "Banana",
    "Maçã",
    "Laranja",
    "Uva",
    "Refrigerante",
    "Suco",
    "Água Mineral",
    "Biscoitos",
    "Cereais",
    "Molho de Tomate",
    "Condimentos",
    "Iogurte",
    "Sorvete",
    "Chocolate"
  ];

  function handleAddProduct(){

  }

  function handleProductRemove(name: String){
    console.log(`Você clicou no botão de remover Produto ${name}`) 
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

      

      <View style={style.list}>
      { /*<Text style={style.listEmpytText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text> */}


    {/* <ScrollView>
    {   
        products.map((product) => <Product key = {product} name = {product} onRemove={() => handleProductRemove(product)}/>)
    }
    </ScrollView> */}

    <Text style ={style.listTitle}>Compras pendentes</Text>

    <FlatList
        data={products}
        keyExtractor={(item) => item}
        contentContainerStyle={style.list}
        renderItem={({item}) => <Product name = {item} onRemove={() => handleProductRemove(item)} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<Text style={style.listEmpytText}>
            Comprou todos os produtos? Adicione produtos a sua lista de compras
            </Text>
            )}
    />


      </View>
    </View>
  )
}

