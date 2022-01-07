import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <List />
        </div>
      </main>
    </div>
  );
};

export default App;
