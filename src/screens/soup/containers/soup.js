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
        const { level, category } = this.props
        GenerateSoup.setLevel(level, category)

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
        GenerateSoup.setLevel(level, this.props.category)
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
        const { level, user } = this.props
        const { board, founded } = this.state
        return (
                <>
                <NewGameButton/>
                <View style={Styles.container}>
                    <Text style = {{ color:'white'}}>🙋‍♂️ {user}</Text>
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
    }
}

export default connect(mapStateToProps)(Soup);