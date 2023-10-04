import './app.css'
import InfoSection from './components/InfoDiv'

function App() {
  const divStyle = {
    backgroundColor: 'purple',
    width: '100%',
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
  };

  return (
    <div className="App" style={divStyle}>
      <InfoSection />
    </div>
  );
}

export default App;

