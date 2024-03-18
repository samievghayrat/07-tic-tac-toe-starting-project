import Player from "./components/Player.jsx";

function App() {


    return <main>
        <div id="game-container">
            <ol id="players">
                <Player name="Player one" symbol="X"></Player>
                <Player name="Player 2" symbol="X"></Player>

            </ol>
            <h5>GAME BOARD</h5>
        </div>
    </main>
}

export default App
