import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import Header from "./components/Header";
import SimLogin from "./pages/SimLogin";
import UserList from "./pages/UserList";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState('')
  return (
    <div>
      <Header user={user} />
      <div className="p-3">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/login" element={<SimLogin setUser={setUser} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
