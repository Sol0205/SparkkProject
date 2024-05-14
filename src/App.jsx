import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" class="appHeader">
        <div class="contenedorPagePrincipal">
          <div class="encabezado">
            <div>
              <a
                class="encabezadoSparkkTexto"
                href="https://www.twitch.tv/theregext"
              >
                SPARKK
              </a>
            </div>
            <div class="encabezadoIdioma">
              <a
                class="encabezadoIdiomaEspañol"
                href="https://www.twitch.tv/theregext"
              >
                ES
              </a>
              <a
                class="encabezadoIdiomaIngles"
                href="https://www.twitch.tv/theregext"
              >
                EN
              </a>
            </div>
            <div class="encabezadoMenu">
              <button>MENU</button>
            </div>
          </div>
          <div>
            <p class="body">
              LET US
              <br />
              PLAY WITH
              <br />
              YOUR
            </p>
            <p class="bodyIdeas">ideas</p>
          </div>
          <div class="bodyAptitudes">
            <p>web agency</p>
            <p>ux-ui desing</p>
            <p>front-end</p>
            <p>back-end</p>
          </div>
        </div>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
