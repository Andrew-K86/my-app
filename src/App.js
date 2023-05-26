import Form from './Components/Form/Form';
import PackageContextProvider from './PackageContext/PackageContextProvider/PackageContextProvider';
import './style.css';
function App() {
  return (
    <PackageContextProvider>
      <div className="App">
        <Form />
      </div>
    </PackageContextProvider>
  );
}

export default App;