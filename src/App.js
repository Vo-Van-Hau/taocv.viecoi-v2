import RouterWeb from './Routes/RouterWeb';

function App(props) {
    return (
        <div className="App" style={{
            padding: 30,
            backgroundColor: '#f0f2f5',
        }}>
            <RouterWeb {...props}/>
        </div>
    );
}

export default App;
