import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

function App() {
  return (
    <section className="card users-container">

      <Header />

      <main className="main">

        <UserList />

        <button className="btn-add btn">Add new user</button>

      </main>

      <Footer />
      
    </section>
  );
}

export default App;
