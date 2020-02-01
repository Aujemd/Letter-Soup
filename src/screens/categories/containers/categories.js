import React, { Component } from 'react';
import {View, Text , StyleSheet} from 'react-native'
import Categorie from '../components/categorie';
import {connect} from 'react-redux'
import GenerateSoup from '../../../../utils/generateSoup'

class Categories extends Component{

    
    setCategory = id => {

        GenerateSoup.setLevel(1, id)
        const board = GenerateSoup.generate()
        const words = GenerateSoup.getWords()
        const limitWords = GenerateSoup.getLimit()
        const win = GenerateSoup.getLimit()
        const founded = 0

        this.props.dispatch({
            type: 'SET_CATEGORY',
            payload: {
                category: id,
                inSelectionCategories: false,
                inGame: true,
                board: board,
                limitWords: limitWords,
                win: win,
                founded: founded,
                words: words,
            }
        })
    }
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
                    onPress = { () => {
                        this.setCategory(1)
                    }} 
                />
                <Categorie 
                    contain = {<Text>Colores</Text>}
                    icon = {<Text>🎨</Text>}
                    style = {{
                        backgroundColor: "#FF7F5A",
                    }}
                    onPress = { () => {
                        this.setCategory(2)
                    }} 
                />
                <Categorie 
                    contain = {<Text>Animales</Text>}
                    icon = {<Text>🙈</Text>}
                    style = {{
                        backgroundColor: "#1FE9C3",
                    }}
                    onPress = { () => {
                        this.setCategory(3)
                    }} 
                />
                <Categorie 
                    contain = {<Text>Objetos</Text>}
                    icon = {<Text>🏹</Text>}
                    style = {{
                        backgroundColor: "#D098FB",
                    }}
                    onPress = { () => {
                        this.setCategory(4)
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
export default connect(null)(Categories)