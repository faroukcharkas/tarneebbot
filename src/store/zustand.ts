import { GameState, Suit, Team } from '@/globals';
import { CardModel } from '@/models/CardModel';
import { HandModel } from '@/models/HandModel';
import { PlayerModel } from '@/models/PlayerModel';
import { create } from 'zustand';

interface GameStore {
    player1Model: PlayerModel,
    player2Model: PlayerModel,
    player3Model: PlayerModel,
    player4Model: PlayerModel,
}

const useGameStore = create<GameStore>()((set) => ({
    player1Model: new PlayerModel(new HandModel(1), Team.Pro, 0),
    player2Model: new PlayerModel(new HandModel(2), Team.Anti, 0),
    player3Model: new PlayerModel(new HandModel(3), Team.Pro, 0),
    player4Model: new PlayerModel(new HandModel(4), Team.Anti, 0)
  }))