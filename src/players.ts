type Player = {
  id: number;
  name: string;
  role: string;
  runs: number;
  wickets: number;
};


export function getPlayerNames(players: Player[]): string[] {
  return players.map((player) => player.name);
}


export function getBatsmen(players: Player[]): Player[] {
  return players.filter((player) => player.role === 'batsman');
}


export function getPlayerByName(players: Player[], name: string): Player | undefined {
  return players.find((player) => player.name === name);
}


export function getTotalRuns(players: Player[]): number {
  return players.reduce((total, player) => total + player.runs, 0);
}
