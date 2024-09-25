import { combineReducers, createStore } from "redux";
const initialdata = {
  accoutHolderName: "",
  balance: 0,
  mobileNumber: "",
};

const accountUpate = (state = initialdata, action) => {
  console.log(action.type);

  switch (action.type) {
    case "MOBILE_UPDATE":
      return { ...state, mobileNumber: action.payload };
    case "DEPOSIT":
      return { ...state, balance: state.balance + +action.payload };
    case "WITHDRAW":
      return { ...state, balance: state.balance - +action.payload };
    case "ACCOUNT_HOLDER_NAME_UPDATE":
      return { ...state, accoutHolderName: action.payload };

    case "RESET":
      return initialdata;
    default:
      return state;
  }
};

const transactionReducer = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state,
        {
          transactioniD: action.payload.transactioniD,
          amount: action.payload.amount,
          date: action.payload.date,
          type: action.payload.type,
        },
      ];

    default:
      return state;
  }
};
let rootReducer = combineReducers({
  account: accountUpate,
  transaction: transactionReducer,
});
const userStore = createStore(rootReducer);

export default userStore;
