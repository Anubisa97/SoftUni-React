import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import UserList from "./components/user-list/UserList";
import "./styles.css";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <UserList />
      </main>

      <Footer />
    </>
  );
}

export default App;
