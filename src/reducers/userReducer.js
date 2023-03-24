import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    isUserLoggedIn: false,
    userDetails: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGGED_IN_USER_INFO':
            state = { isUserLoggedIn: true, userDetails: action.payload };
            return state;
        break; 

        case 'SIGN_IN':
            try {
                const jsonValue = JSON.stringify(action.payload);
                AsyncStorage.setItem('@UserDetails', jsonValue);
                state = {
                    isUserLoggedIn: true,
                    userDetails: action.payload,
                };
            } catch (error) {
                console.warn(error.message);
            }
            return state;
            break;

        case 'SIGN_OUT':
            try {
                AsyncStorage.removeItem('@UserDetails');
                state = {
                isUserLoggedIn: false,
                    userDetails: {},
                };
            } catch (error) {
                console.warn(error.message);
            }
            return state;
            break;

        default:
            return state;
            break;
    }
};

export default userReducer;
