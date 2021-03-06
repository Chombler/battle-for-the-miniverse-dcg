import React from 'react';
import heights from './images/board/heights.png';
import ground from './images/board/ground.png';
import the_void from './images/board/void.png';
import { Card } from './Card';

export class BattleBoard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			mouseX: 0,
			mouseY: 0,
		};
	}

	onClick(id){
		this.props.moves.clickLocation(id);
	}

	render(){
		let hand = this.renderHand();
		let board = this.renderBoard();
		return(
			<div>
				<div id='hand'>{hand}</div>
				<div id='board'>{board}</div>
			</div>
		);
	}

	renderHand(){
		const cardStyle = {
			width: '10%',
			height: '50%',
		};
		return(
			<Card style = {cardStyle}/>
		);
	}

	renderBoard(){
		const cellStyle = {
			width: '20%',
			border: '1px solid #555',
			position: 'relative',
		};

		const laneStyle = {
			width: '100%',
		};

		const textStyle = {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		};
		
		let board = [];

		for(let row = 0; row < 2; row++){
			let lanes = [];
			for(let col = 0; col < 5; col++){
				let id = row * 5 + col
				lanes.push(
					<td style = {cellStyle} key = {id} onClick = {() => { this.onClick(id) }}>
						<img style = {laneStyle} src={ground} alt='theground' />
						<div style = {textStyle}>{this.props.G.board[id]}</div>
					</td>);			
			}
			board.push(<tr key={row}>{lanes}</tr>);
		}

		return(
			<div>
				<table id = 'Board'>
					<tbody>{board}</tbody>
				</table>
			</div>
		);
	}
}