import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    orderBy: {
      createdAt: 'asc',
    },
  });

export const createUser = (username, score) =>
  dbClient.user.create({
    data: {
      username: username,
      score: score,
    },
  });
