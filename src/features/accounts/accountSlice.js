const initialStateAccounts = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };

  const accountReducer = (state = initialStateAccounts, action) => {
    // if (typeof state === "undefined") { state = initialStateAccounts}
    switch (action.type) {
      case "account/deposit":
        return { ...state, balance: state.balance + action.payload };
  
      case "account/withdraw":
        return { ...state, balance: state.balance - action.payload };
  
      case "account/requestLoan":
        if (state.loan > 0) {
          return state;
        }
        return {
          ...state,
          balance: state.balance + action.payload.amount,
          loan: action.payload.amount,
          loanPurpose: action.payload.purpose,
        };
  
      //!Later
  
      case "account/payLoan":
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
          loanPurpose: "",
        };
  
      default:
        return state;
    }
  };


export const deposit = (amount) => {
    return { type: "account/deposit", payload: amount };
  };
  export const withdraw = (amount) => {
    return { type: "account/withdraw", payload: amount };
  };
  export const requestLoan = (amount, purpose) => {
    return { type: "account/requestLoan", amount: amount, purpose: purpose };
  };
  export const payLoan = () => {
    return { type: "account/payLoan" };
  };

//* EXPORT
  export default accountReducer;
  