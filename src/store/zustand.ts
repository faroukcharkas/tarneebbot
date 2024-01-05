import { GameState, Suit } from '@/globals';
import { create } from 'zustand';

type GameStore = {
    currentBet: number,
    handWinCount: number,
    handLoseCount: number,
    gameWinCount: number,
    gameLoseCount: number,
    currentTarneeb: Suit,
    currentState: GameState,
}