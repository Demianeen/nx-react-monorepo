import { Route, Routes } from 'react-router-dom';
import { StartupList } from '@react-monorepo/startup';

function Home() {
  return <h1>Home</h1>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<StartupList />}></Route>
    </Routes>
  );
}

export default App;
