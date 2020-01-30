import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Board from '../components/board'
import LevelLabel from '../components/levelLabel'
import Letter from '../components/letter'
import { connect } from 'react-redux'

import GenerateSoup from '../../../../utils/generateSoup'

class Soup extends Component {


    constructor(props) {
        super(props)
        const { level } = this.props
        GenerateSoup.setLevel(level)

        this.state = {
            currentInput: '',
            board: GenerateSoup.generate(),
            words: GenerateSoup.getWords(),
            limitWords: GenerateSoup.getLimit(),
            win: GenerateSoup.getLimit(),
            founded: 0,
        }
    }

    nextLevel() {
        const level = this.props.level + 1
        GenerateSoup.setLevel(level)
        this.setState(state => ({
            currentInput: '',
            board: GenerateSoup.generate(),
            words: GenerateSoup.getWords(),
            limitWords: GenerateSoup.getLimit(),
            win: GenerateSoup.getLimit(),
        }), () => {
            console.log("Cambiando de nivel ...");
            
        });

        this.props.dispatch({
            type: 'SET_LEVEL',
            payload: {
                level: this.props.level + 1,
            }
        })
    }

    componentDidUpdate() {
        if (this.state.founded == this.state.win) {
            this.setState(state => ({
                founded: 0,
            }));
            this.nextLevel()
            console.log("Ganaste ! :)");
        }
    }

    pressHandle(place) {

        const { letter, specialIn } = place

        if (specialIn) {
            this.setState(state => ({
                currentInput: state.currentInput + letter
            }), () => {
                console.log(this.state.currentInput);
                for (let i = 0; i < this.state.limitWords; i++) {
                    if (this.state.currentInput.includes(this.state.words[i])) {
                        console.log(`Encontraste ${this.state.words[i]}`);
                        this.setState(state => ({
                            words: state.words.filter(word => word !== this.state.words[i]),
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


    render() {
        const { level } = this.props
        const { board } = this.state
        return (
            <View style={Styles.container}>
                <LevelLabel level={level}></LevelLabel>
                <Board>
                    {
                        board.map((place, key) => (
                            <Letter
                                level={level}
                                onPress={() => {
                                    this.pressHandle(place)
                                }}>
                                {place.letter}
                            </Letter>
                        )
                        )
                    }
                </Board>
            </View>
        )
    }

}

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})

function mapStateToProps(state) {
    return {
        level: state.level
    }
}

export default connect(mapStateToProps)(Soup);