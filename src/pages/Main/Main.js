import Banner from "../../components/Banner/Banner";
import Month from "../../components/Button/Month/Month";
import Card from "../../components/Card/Card";
import CardData from "./data.json";
import "./Main.scss";

export default function Main() {
  return (
    <>
      <section className="main">
        <div className="main-banner">
          <Banner />
        </div>
        <div>
          <Month />
        </div>
        <div className="main-bottom">
          {CardData.getFestivalKr.item.map((c) => (
            <Card
              title={c.TITLE}
              subtitle={c.SUBTITLE}
              date={c.USAGE_DAY_WEEK_AND_TIME}
              post={c.MAIN_IMG_THUMB}
              day={c.USAGE_DAY}
            />
          ))}
        </div>
      </section>
    </>
  );
}
