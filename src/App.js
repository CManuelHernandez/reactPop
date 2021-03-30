import './App.css';

import { LoginPage } from './components/auth';
import { AdvertDetailPage, AdvertsPage, NewAdvertPage } from './components/adverts';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <AdvertsPage />
      <AdvertDetailPage />
      <NewAdvertPage />
    </div>
  );
}

export default App;
