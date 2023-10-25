import { useSelector } from "react-redux/es/hooks/useSelector";

function Customer() {
  const customer = useSelector((store) => {
     return store.customer.fullname;
  });

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
