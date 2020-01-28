import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Letter from './letter'
import GenerateSoup from '../../../../utils/generateSoup';

class Board extends Component{

    constructor(props){
        super(props)
        this.state = {
            currentInput: '',
            level : 6,
            board: [],
            words: [],
            limitWords: 0,
            founded: 0,
        }

    }
    
    componentDidUpdate(){
        if(this.state.founded == this.state.limitWords){
            console.log("GANASTE");
        }
    }
    componentDidMount(){
        GenerateSoup.setLevel(this.state.level)
        this.setState({
            board: GenerateSoup.generate(),
            words: GenerateSoup.getWords(),
            limitWords: GenerateSoup.getLimit(),
        })
    }
    
    pressHandle(letra){
        this.setState(state => ({
            currentInput: state.currentInput + letra
        }), () => {
            for (let i = 0; i < this.state.limitWords; i++) {
                if(this.state.currentInput.includes(this.state.words[i])){
                    console.log(`Encontraste ${this.state.words[i]}`);
                    this.setState(state => ({
                        words: state.words.filter( word => word !== this.state.words[i]),
                        founded: state.founded += 1
                    }), () => {
                    })
                    
                }
            }

        })    
    }

    render(){
        return(
            <View style = {Styles.container}>
                {this.state.board.map((letra, key) => (<Letter level = {this.state.level} onPress = {() => {this.pressHandle(letra)}}>{letra}</Letter>))}
            </View>
        );
    }

}
var Styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'white',
        flexWrap: 'wrap',
        margin: 10,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Board; 