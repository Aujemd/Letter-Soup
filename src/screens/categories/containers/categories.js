import React, { Component } from 'react';
import {View, Text , StyleSheet} from 'react-native'
import Categorie from '../components/categorie';

class Categories extends Component{
    render(){
        return(
            <View style = {Styles.container}>
                <View style = {Styles.mainTitleContainer}>
                    <Text style =  {Styles.mainTitle}>Categorías</Text>
                </View>
                <Categorie 
                    contain = {<Text>Comida</Text>}
                    icon = {<Text>🍔</Text>}
                    style = {{
                        backgroundColor: "#FFDE5A",
                    }} 
                />
                <Categorie 
                    contain = {<Text>Colores</Text>}
                    icon = {<Text>🖍</Text>}
                    style = {{
                        backgroundColor: "#FF7F5A",
                    }} 
                />
                <Categorie 
                    contain = {<Text>Animales</Text>}
                    icon = {<Text>🐎</Text>}
                    style = {{
                        backgroundColor: "#1FE9C3",
                    }} 
                />
                <Categorie 
                    contain = {<Text>Vehiculos</Text>}
                    icon = {<Text>🚲</Text>}
                    style = {{
                        backgroundColor: "#D098FB",
                    }} 
                />                                               
            </View>
            )
    }
}

const Styles = StyleSheet.create({
    mainTitle: {
        color : 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    mainTitleContainer: {
        backgroundColor : '#00B9FF',
        width: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
        padding: 5,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
});
export default Categories