import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Letter from './letter'
import GenerateSoup from '../../../../utils/generateSoup';

class Board extends Component{

    constructor(props){
        
        super(props)

        const {level} = this.props

        GenerateSoup.setLevel(level)

        this.state = {
            currentInput: '',
            board: GenerateSoup.generate(),
            words: GenerateSoup.getWords(),
            limitWords: GenerateSoup.getLimit(),
            win : GenerateSoup.getLimit(),
            founded: 0,
        }        
    }
    
    componentDidUpdate(){
        if(this.state.founded == this.state.win){
            console.log("GANASTE");
        }
    }

    pressHandle(place){

        const {letter, specialIn} = place

        if(specialIn){
            this.setState(state => ({
                currentInput: state.currentInput + letter
            }), () => {
                console.log(this.state.currentInput);
                for (let i = 0; i < this.state.limitWords; i++) {
                    if(this.state.currentInput.includes(this.state.words[i])){
                        console.log(`Encontraste ${this.state.words[i]}`);
                        this.setState(state => ({
                            words: state.words.filter( word => word !== this.state.words[i]),
                            founded: state.founded += 1,
                            limitWords: state.limitWords -= 1,
                        }), () => {
                            console.log(this.state.words); 
                        })
                        
                    }
                }
    
            })
        }
        
    }

    render(){
        return(
            <View style = {Styles.container}>
                {this.state.board.map((place, key) => (
                    <Letter level = {this.props.level} onPress = {  () => {
                        this.pressHandle(place)
                    }
                }>{place.letter}</Letter>))}
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