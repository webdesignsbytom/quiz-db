// Components
import {
  findAllUsers,
  createUser,
} from '../domain/users.js';
import {
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllUsers = async (req, res) => {
  console.log('getAllUsers');
  try {
    const foundUsers = await findAllUsers();

    if (!foundUsers) {
      return sendMessageResponse(res, 404, 'No one found in database');
    }

    return sendDataResponse(res, 200, { users: foundUsers });
  } catch (err) {
    // Error
    return sendMessageResponse(res, 500, 'Error');

  }
};

export const postNewScore = async (req, res) => {
  console.log('create new user');
  const { username, score } = req.body;

  try {
    if (!username || !score) {
      return sendMessageResponse(res, 400, 'Missing field');
    }

    const createdScore = await createUser(
      username, score
    );

    if (!createdScore) {
      return sendMessageResponse(res, 404, 'Not created');
    }

    return sendDataResponse(res, 202, { createdScore });
  } catch (err) {
    // Error
    return sendMessageResponse(res, 500, 'Error');

  }
};
