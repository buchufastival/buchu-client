import Banner from "../../components/Banner/Banner";
import Month from "../../components/Button/Month/Month";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <section className="main">
        <div className="main-banner">
          <Banner />
        </div>
        <div>
          <Month/>
        </div>
      </section>
    </>
  );
}
