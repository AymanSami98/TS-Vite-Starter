import { Routes, Route } from 'react-router-dom';
import {HomePage} from './pages';
const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes>
  );
};

export default App;
