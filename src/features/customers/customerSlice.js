const initialStateCustomers = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerReducer = (state = initialStateCustomers, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return { ...state, fullName: action.payload };

    default:
      return state;
  }
};

export const createCustomer = (fullName, nationalId) => {
  return {
    type: "customers/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
};

export const updateName = (fullName) => {
  return { type: "customers/updateName", payload: fullName };
};


export default customerReducer;
