import { addUser } from './add-user';
import { getUser } from './get-user';

export const server = {
  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: 'Такой пользователь не найден',
        res: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: 'Неверный пароль',
        res: null,
      };
    }

    const session = {
      logout() {
        Object.keys(session).forEach((key) => {
          delete session[key];
        })
      },
      removeComment() {
        console.log('Удаление комментария');
      },
    };

    return {
      error: null,
      res: session,
    };
  },
  async registration(regLogin, regPassword) {
    const user = await getUser(regLogin);

    if (user) {
      return {
        error: 'Такой логин уже занят',
        res: null,
      };
    }

    await addUser(regLogin, regPassword);

    const session = {
      logout() {
        Object.keys(session).forEach((key) => {
          delete session[key];
        })
      },
      removeComment() {
        console.log('Удаление комментария');
      },
    };

    return {
      error: null,
      res: session,
    }
  },
};
