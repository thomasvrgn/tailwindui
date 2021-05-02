import * as ButtonGroup from '../components/elements/ButtonGroup';
function App() {
  return (
    <div className="App">
      <ButtonGroup.Basic className="m-4">
        <button>Years</button>
        <button>Months</button>
        <button>Days</button>
        <button className="font-light">Say "hey" to Thomas</button>
      </ButtonGroup.Basic>
      <ButtonGroup.Icon className="m-4">
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z" fill="currentColor" /></svg>
        </span>
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5858 6.34317L12 4.92896L19.0711 12L12 19.0711L10.5858 17.6569L16.2427 12L10.5858 6.34317Z" fill="currentColor" /></svg>
        </span>
      </ButtonGroup.Icon>
      <ButtonGroup.Basic className="m-4">
        <span className="flex-row py-1.5 pl-3">
          <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M19 20H17.1717L12.7072 15.5354C12.3166 15.1449 11.6835 15.1449 11.2929 15.5354L6.82843 20L5 20V7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34314 19 7V20ZM17 7C17 6.44772 16.5523 6 16 6H8C7.44772 6 7 6.44772 7 7V17L9.87873 14.1212C11.0503 12.9497 12.9498 12.9497 14.1214 14.1212L17 16.9999V7Z" fill="currentColor" /></svg>
          Bookmark
        </span>
        <span>
          12k
        </span>
      </ButtonGroup.Basic>
    </div>
  );
}

export default App;
