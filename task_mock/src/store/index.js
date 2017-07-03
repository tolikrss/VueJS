import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        auth: false,
        activeUserID: -1,
        activeUser: {
            email: '',
            password: ''
        },
        usersData: {
            users: [{
                    password: 'test',
                    email: 'test',
                    id: 1
                },
                {
                    password: 'test',
                    email: 'alice_herper1@gmail.com',
                    id: 2
                },
                {
                    password: 'test',
                    email: 'alice_herper2@gmail.com',
                    id: 3
                }
            ]
        },
        usersList: {
            users: [{
                    name: "Alice Herper",
                    contacts: {
                        phone: '+380952328235',
                        email: 'test'
                    },
                    literature: ["Garry Poter", "Other book"],
                    id: 1
                },
                {
                    name: "Alice Herper1",
                    contacts: {
                        phone: '+380952328235',
                        email: 'alice_herper1@gmail.com'
                    },
                    literature: ["Garry Poter1", "Other book1"],
                    id: 2
                },
                {
                    name: "Alice Herper2",
                    contacts: {
                        phone: '+380952328235',
                        email: 'alice_herper2@gmail.com'
                    },
                    literature: ["Garry Poter2", "Other book2"],
                    id: 3
                }
            ]
        }
    },
    actions: {},
    mutations: {
        importFromStorage(state) {
            if (!!localStorage.getItem('auth')) {
                state.auth = JSON.parse(localStorage.getItem('auth'))
            };
            if (!!localStorage.getItem('activeUserID')) {
                state.activeUserID = JSON.parse(localStorage.getItem('activeUserID'))
            };
            if (!!localStorage.getItem('activeUser')) {
                state.activeUser = JSON.parse(localStorage.getItem('activeUser'))
            };
            if (!!localStorage.getItem('usersData')) {
                state.usersData = JSON.parse(localStorage.getItem('usersData'))
            };
            if (!!localStorage.getItem('usersList')) {
                state.usersList = JSON.parse(localStorage.getItem('usersList'));
            };
        },
        signUpUser(state, obj) {
            state.activeUserID = state.usersData.users.length + 1;
            localStorage.setItem('activeUserID', JSON.stringify(state.activeUserID));

            state.usersData.users.push({
                password: obj.password,
                email: obj.eMail,
                id: state.activeUserID
            });
            localStorage.setItem('usersData', JSON.stringify(state.usersData));

            state.usersList.users.push({
                contacts: {
                    email: obj.eMail
                },
                id: state.activeUserID
            });
            localStorage.setItem('usersList', JSON.stringify(state.usersList));

            state.activeUser.email = obj.password;
            state.activeUser.password = obj.eMail;
            localStorage.setItem('activeUser', JSON.stringify(state.activeUser));

            state.auth = true;
            localStorage.setItem('auth', JSON.stringify(state.auth));
        },
        setActiveUserPhone(state, phone) {
            for (var i = 0; i < state.usersList.users.length; i++) {
                if (state.usersList.users[i].id === state.activeUserID) {
                    state.usersList.users[i].contacts.phone = phone;
                    localStorage.setItem('usersList', JSON.stringify(state.usersList));
                    return;
                }
            }
        },
        logInUser(state, obj) {
            console.log('logInUser from store worked');
            console.log('Props email = ' + obj.eMail + " . props pass = " + obj.password);
            for (var i = 0; i < state.usersData.users.length; i++) {
                if (state.usersData.users[i].email === obj.eMail && state.usersData.users[i].password === obj.password) {
                    state.auth = true;
                    localStorage.setItem('auth', JSON.stringify(state.auth));

                    state.activeUser.email = obj.password;
                    state.activeUser.password = obj.eMail;
                    localStorage.setItem('activeUser', JSON.stringify(state.activeUser));

                    state.activeUserID = state.usersData.users[i].id;
                    localStorage.setItem('activeUserID', JSON.stringify(state.activeUserID));
                }
            }
        },
        addBook(state, obj) {
            for (var i = 0; i < state.usersList.users.length; i++) {
                if (state.usersList.users[i].id === state.activeUserID) {
                    state.usersList.users[i].literature.push(obj.bookName);
                    localStorage.setItem('usersList', JSON.stringify(state.usersList));
                    return;
                }
            }
            return "getActiveUserListObj() from store works"
        }
    },
    getters: {
        getActiveUserEmail(state) {
            for (var i = 0; i < state.usersList.users.length; i++) {
                if (state.usersList.users[i].id === state.activeUserID) {
                    return state.usersList.users[i].contacts.email;
                }
            }
            return "getActiveUserEmail() from store works, but id not finded"
        },
        getActiveUserListObj(state) {
            for (var i = 0; i < state.usersList.users.length; i++) {
                if (state.usersList.users[i].id === state.activeUserID) {
                    return state.usersList.users[i];
                }
            }
            return "getActiveUserListObj() from store works"
        }
    },
    modules: {}
})

export default store