import Main from "../../components/Main/Main";
import Search from "../../components/Search/Search";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      <section className="top">
        <Search />
      </section>
      <section className="bottom">
        <Main />
      </section>
    </div>
  );
};

export default HomePage;
