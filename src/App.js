import { useDispatch, useSelector } from "react-redux";

import Router from './Router';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  console.log(selector)
  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
