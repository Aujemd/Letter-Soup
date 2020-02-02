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

        if (this.props.level !== this.props.finalLevel) {
            const level = this.props.level + 1

            GenerateSoup.setLevel(level, this.props.category)
            this.setState(state => ({
                currentInput: '',
            }));

            this.props.dispatch({
                type: 'SET_LEVEL',
                payload: {
                    level: this.props.level + 1,
                    board: GenerateSoup.generate(),
                    words: GenerateSoup.getWords(),
                    limitWords: GenerateSoup.getLimit(),
                    win: GenerateSoup.getLimit(),
                    founded: 0,
                    joker: false,
                }
            })
        } else {
            this.props.dispatch({
                type: 'SET_LEVEL',
                payload: {
                    level: this.props.level,
                    inGame: false,
                }
            })
        }
    }

    componentDidUpdate() {
        const { founded, win } = this.props
        if (founded == win) {
            this.nextLevel()
        }
    }

    pressHandle(place, id) {
        const { letter, specialIn } = place
        const { limitWords, words, founded } = this.props

        if (specialIn) {
            this.setState(state => ({
                currentInput: state.currentInput + letter
            }), () => {
                console.log(this.state.currentInput);
                let found = false
                for (let i = 0; i < limitWords && found === false; i++) {
                    if (this.state.currentInput.includes(words[i])) {
                        found = true

                        let newWords = words.filter(word => word !== words[i])
                        let newFounded = founded
                        let newLimitWords = limitWords

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

                        this.setState(state => ({
                            currentInput: '',
                        }));
                    }
                }

            })
        }
    }

    showJokers() {
        this.props.dispatch({
            type: 'SET_LEVEL',
            payload: {
                joker: !this.props.joker,
            }
        })
    }
    render() {
        const { level, user, board, founded, words, limitWords, joker } = this.props
        return (
            <>
                {
                    joker && <View style={Styles.jokerContainer}>
                        <Text style={{ color: 'white', marginBottom: 5, marginHorizontal: 40 }}>Primeras Letras de las palabras en la sopa {joker}</Text>

                        {
                            words.map((word, key) => {
                                if (key < limitWords) {
                                    return (
                                        <Text style={Styles.jokerLetter}>{word[0]}</Text>
                                    )
                                }
                            })
                        }
                    </View>
                }

                <NewGameButton />
                <View style={Styles.container}>
                    <Text style={{ color: 'white' }}>🙋‍♂️ {user}</Text>
                    <View style={Styles.labelsContainer}>
                        <TouchableOpacity
                            style={Styles.buttom}
                            onPress={() => {
                                this.showJokers()
                            }}>
                            <Text style={Styles.buttomLetter}>👀</Text>
                        </TouchableOpacity>
                        <LevelLabel level={level}></LevelLabel>
                        <Text style={{ color: 'white', marginHorizontal: 10 }}>Ver Pistas</Text>
                        <Text style={{ color: 'white', marginHorizontal: 30 }}>Palabras Encontradas = {founded}</Text>
                    </View>
                    <Board>
                        {
                            board.map((place, key) => (
                                <Letter
                                    level={level}
                                    onPress={() => {
                                        this.pressHandle(place, key)
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
        marginHorizontal: 20,


    },
    buttomLetter: {
        fontSize: 25,
    },
    jokerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    jokerLetter: {
        color: 'white',
        marginHorizontal: 5,
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
        finalLevel: state.finalLevel,
        joker: state.joker,
    }
}

export default connect(mapStateToProps)(Soup);