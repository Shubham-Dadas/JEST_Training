import {
  getPlayerNames,
  getBatsmen,
  getPlayerByName,
  getTotalRuns,
} from './players';

describe('Player Data Functions', () => {
  const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      role: 'batsman',
      runs: 10000,
      wickets: 10,
    },
    {
      id: 2,
      name: 'Rohit Sharma',
      role: 'batsman',
      runs: 8000,
      wickets: 25,
    },
    {
      id: 3,
      name: 'Jasprit Bumrah',
      role: 'bowler',
      runs: 1000,
      wickets: 150,
    },
  ];

  test('should return names of all players', () => {
    const expectedOutput = ['Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah'];
    expect(getPlayerNames(players)).toEqual(expectedOutput);
  });

  test('should return players whose role is batsman', () => {
    const expectedOutput = [
      {
        id: 1,
        name: 'Virat Kohli',
        role: 'batsman',
        runs: 10000,
        wickets: 10,
      },
      {
        id: 2,
        name: 'Rohit Sharma',
        role: 'batsman',
        runs: 8000,
        wickets: 25,
      },
    ];
    expect(getBatsmen(players)).toEqual(expectedOutput);
  });

  test('should return player data for "Jasprit Bumrah"', () => {
    const expectedOutput = {
      id: 3,
      name: 'Jasprit Bumrah',
      role: 'bowler',
      runs: 1000,
      wickets: 150,
    };
    expect(getPlayerByName(players, 'Jasprit Bumrah')).toEqual(expectedOutput);
  });

  test('should return undefined if player with given name is not found', () => {
    expect(getPlayerByName(players, 'MS Dhoni')).toBeUndefined();
  });

  test('should calculate total runs of all players', () => {
    const expectedOutput = 19000; 
    expect(getTotalRuns(players)).toBe(expectedOutput);
  });
});
