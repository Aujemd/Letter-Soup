import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Board from '../components/board'
import LevelLabel from '../components/levelLabel'
import Letter from '../components/letter'
import { connect } from 'react-redux'
import NewGameButton from '../components/newGame'

import GenerateSoup from '../../../../utils/generateSoup'

class Soup extends Component {


    constructor(props) {
        super(props)
        this.state = {
            currentInput: '',
        }
    }


    nextLevel() {
        const level = this.props.level + 1
        GenerateSoup.setLevel(level, this.props.category)
        this.setState(state => ({
            currentInput: '',
        }), () => {
            console.log("Cambiando de nivel ...");
        });

        this.props.dispatch({
            type: 'SET_LEVEL',
            payload: {
                level: this.props.level + 1,
                board: GenerateSoup.generate(),
                words: GenerateSoup.getWords(),
                limitWords: GenerateSoup.getLimit(),
                win: GenerateSoup.getLimit(),
            }
        })
    }

    componentDidUpdate() {
        const { founded, win } = this.props
        if (founded == win) {
            this.props.dispatch({
                type: 'SET_LEVEL',
                payload: {
                    founded: 0,
                }
            })

            this.nextLevel()
            console.log("Ganaste ! :)");
        }
    }

    pressHandle(place) {

        const { letter, specialIn } = place
        const { limitWords, words, founded} = this.props

        console.log(`current words ${words}`);
        
        if (specialIn) {
            this.setState(state => ({
                currentInput: state.currentInput + letter
            }), () => {
                console.log(this.state.currentInput);
                for (let i = 0; i < limitWords; i++) {
                    if (this.state.currentInput.includes(words[i])) {
                        console.log(`Encontraste ${words[i]}`);

                        let newWords = words.filter(word => word !== words[i])
                        let newFounded = founded
                        let newLimitWords = limitWords
                        
                        console.log(newWords)
                        
                        newFounded = newFounded + 1
                        newLimitWords = newLimitWords - 1


                        this.props.dispatch({
                            type: 'PUT_WORD',
                            payload: {
                                words: newWords,
                                founded: newFounded,
                                limitWords: newLimitWords,
                            }
                        })
                    }
                }

            })
        }

    }


    render() {
        const { level, user, board, founded } = this.props
        return (
            <>
                <NewGameButton />
                <View style={Styles.container}>
                    <Text style={{ color: 'white' }}>🙋‍♂️ {user}</Text>
                    <View style={Styles.labelsContainer}>
                        <TouchableOpacity
                            style={Styles.buttom}
                        >
                            <Text style={Styles.buttomLetter}>👀</Text>
                        </TouchableOpacity>
                        <LevelLabel level={level}></LevelLabel>
                        <TouchableOpacity
                            style={Styles.buttom}
                        >
                            <Text style={Styles.buttomLetter}>✨</Text>
                        </TouchableOpacity>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>Ver Pistas</Text>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>Palabras Encontradas = {founded}</Text>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>Comodin</Text>
                    </View>
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
            </>
        )
    }

}

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    buttom: {
        backgroundColor: '#00B9FF',
        width: 33,
        height: 33,
        borderRadius: 33 / 2,

    },
    buttomLetter: {
        fontSize: 25,
    }
})

function mapStateToProps(state) {
    return {
        level: state.level,
        category: state.category,
        user: state.user,
        board: state.board,
        limitWords: state.limitWords,
        win: state.win,
        founded: state.founded,
        words: state.words,
    }
}

export default connect(mapStateToProps)(Soup);