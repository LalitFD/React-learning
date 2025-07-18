import logo from './logo.svg';
import './App.css';
import First from './component/First';
import { createContext } from 'react';

export const MessageContext = createContext();
export const DataContext = createContext()
function App() {
  let DataMessage = "Hello";


  return <>
    <h1>App Component</h1>
    <MessageContext value={DataMessage}>
      <DataContext value={{ m1: "GM", m2: "GN", m3: "GE" }}>
        <First />
      </DataContext>
    </MessageContext>

  </>
}
export default App;
