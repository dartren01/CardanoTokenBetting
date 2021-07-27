import React, { Component } from "react";

import './Mines-page.css';

import Board from '../../components/Board/Board-component'

class Mines extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 5,
            width: 5,
            mines: 5
        };
    }

    createBoard() {
        for (let i=0; i < 25; i++) {

        }
    }

    render() { 
        const { height, width, mines } = this.state;
        return (
            <div className="game-container d-flex justify-content-center">
                <div className="game-board p-4 m-1 mt-5 w-100">
                    <Board height={height} width={width} mines={mines}/>
                </div>
            </div>
        )
    }
}
 
export default Mines;