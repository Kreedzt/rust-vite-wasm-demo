import { useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RustPkgWasm, { say_hello as pkg_say_hello } from 'rust_wasm';
import RustWasmLocal, { say_hello } from './assets/rust-wasm-local/rust_wasm';
import './App.css'

function App() {
  const callSayHello = useCallback(() => {
    // ERROR
    pkg_say_hello('Pkg wasm');
  }, []);

  const callSayHelloLocal = useCallback(() => {
    // SUCCESS
    RustWasmLocal().then(() => {
      console.log('callSayHelloLocal', say_hello('Local wasm'));
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={callSayHello}>
          Call wasm package: say_hello
        </button>
        <button onClick={callSayHelloLocal}>
          Call wasm local: say_hello
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
