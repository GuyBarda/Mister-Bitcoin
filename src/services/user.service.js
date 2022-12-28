export const userService = {
    getUsers,
    getUserById,
    deleteUser,
    saveUser,
    getEmptyUser,
    login,
    signup,
    logout,
    getLoggedinUser,
    saveLocalUser,
};

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser';

const users = [
    {
        _id: 'jghaksd12hkggjha',
        name: 'Ochoa Hyde',
        coins: 100,
        moves: [],
    },
    {
        _id: 'jlknasduyui123klua',
        name: 'Parsons Norris',
        coins: 100,
        moves: [],
    },
];

function sort(arr) {
    return arr.sort((a, b) => a.name.localeCompare(b.name));
}

// function getUser() {
//     return Promise.resolve(user);
// }

function getUsers(filterBy = null) {
    return new Promise((resolve, reject) => {
        var usersToReturn = users;
        if (filterBy && filterBy.term) {
            usersToReturn = filter(filterBy.term);
        }
        resolve(sort(usersToReturn));
    });
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user._id === id);
        user ? resolve(user) : reject(`User id ${id} not found!`);
    });
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        const index = users.findIndex((user) => user._id === id);
        if (index !== -1) {
            users.splice(index, 1);
        }

        resolve(users);
    });
}

function _updateUser(user) {
    return new Promise((resolve, reject) => {
        const index = users.findIndex((c) => user._id === c._id);
        if (index !== -1) {
            users[index] = user;
        }
        resolve(user);
    });
}

function _addUser(user) {
    user._id = _makeId();
    user.coins = 100;
    user.moves = [];
    users.push(user);
    return Promise.resolve(user);
}

function saveUser(user) {
    return user._id ? _updateUser(user) : _addUser(user);
}

function getEmptyUser() {
    return {
        name: '',
    };
}

async function login(userCred) {
    const user = users.find(({ name }) => name === userCred.name);
    if (user) return saveLocalUser(user);
}

async function signup(user) {
    const addedUser = await _addUser(user);
    return saveLocalUser(addedUser);
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
}

function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user));
    return user;
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER));
}

function filter(term) {
    term = term.toLocaleLowerCase();
    return users.filter((user) => {
        return (
            user.name.toLocaleLowerCase().includes(term) ||
            user.phone.toLocaleLowerCase().includes(term) ||
            user.email.toLocaleLowerCase().includes(term)
        );
    });
}

function _makeId(length = 10) {
    var txt = '';
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}
