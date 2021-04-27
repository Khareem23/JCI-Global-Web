import { AuthActionType } from "../actions/authaction";

const userregstate = {
    isLoggedIn: false,
    isLoading: false,
    userRole: '',
    pin: '',
    user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        accountType: 1
    }
}

// "id": 3,
//     "email": "string",
//     "firstName": "string",
//     "lastName": "string",
//     "createdDate": "2021-04-27T07:01:16.6194606-07:00",
//     "userRole": "Customer",
//     "phoneNumber": "string",
//     "businessName": "string",
//     "businessRegNumber": "string",
//     "pin": "string",
//     "country": null,
//     "state": "string",
//     "city": "string",
//     "postalCode": "string",
//     "address": "string",
//     "gender": "string",
//     "isKYCCompliancePassed": false,
//     "isAMLCompliancePassed": false,
//     "isScannedForAML": false,
//     "dateOfBirth": "2021-04-26T17:17:21.011Z",
//     "age": 0,
//     "resetKey": "JCI-Reset-ITZTU",
//     "referralDiscountCode": "JCI-DIS-52697786",
//     "accountType": "Individual-Account",
//     "receivers": [],
//     "transactions": [],
//     "customerReferredTransaction": null

const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
        if(auth != null)
        {
            const authobj = JSON.parse(auth)
            return authobj;
        } else {
            return userregstate;
        }
    } catch (error) {
        return userregstate;
    }
};

//check state if exist before
const existingAuth = getAuthState();

//pass it here
const signupreducer = (state = existingAuth, action) => {

    switch (action.type) {
        case AuthActionType.USER_REGISTRATION_SUCCESS:
            const newAuthstate = {
                isLoggedIn: true,
                isLoading: false,
                user: action.payload,
            };
            localStorage.setItem("auth", JSON.stringify(newAuthstate)); 
            return newAuthstate;
        // case AuthActionType.LOGOUT_SUCCESS:
        //     localStorage.removeItem("auth");
        //     return authstate;
        // case AuthActionType.LOGIN_SUCCESS:
        //     const newAuthstatel = {
        //         isLoggedIn: true,
        //         isLoading: false,
        //         userType: '', //TODO: this is hard coded for now, until the api returns apppropriate response
        //         user: action.payload.userDetails,
        //     };
        //     localStorage.setItem("auth", JSON.stringify(newAuthstatel)); 
        //     return newAuthstatel;
        default:
            return state;
    }
};

export default signupreducer;