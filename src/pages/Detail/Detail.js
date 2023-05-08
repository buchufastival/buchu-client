import "./Detail.scss";
import data from "./data.json";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLink } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <section className="detail">
      <div className="detail-tit">
        <div className="detail-img">
          <img src={data.MAIN_IMG_THUMB} />
        </div>
        <div className="detail-info">
          <div className="detail-top">
            <p className="detail-main-title">{data.TITLE}</p>
            <p className="detail-sub-title">{data.SUBTITLE}</p>
            <p className="detail-week-time">{data.USAGE_DAY_WEEK_AND_TIME}</p>
            <div className="detail-top-num">
              <p className="detail-cntct-tel">
                <BsFillTelephoneFill /> {data.CNTCT_TEL}
              </p>
              <Link to={data.HOMEPAGE_URL} target="_blank">
                <p className="detail-home-url">
                  <ImLink /> {data.HOMEPAGE_URL}
                </p>
              </Link>
            </div>
            <p className="detail-rm-1">장애인 관련 : {data.MIDDLE_SIZE_RM1}</p>
          </div>
          <div className="detail-hr">
            <hr />
          </div>
        </div>
        <div className="detail-bottom">
          <div className="detail-item-cntnts">
            <p>{data.ITEMCNTNTS}</p>
          </div>
          <div className="detail-hr">
            <hr />
          </div>
          <div className="detail-more-info">
            <div className="detail-more-info-tit">
              <div className="detail-more-info-title">
                <p className="detail-more-info-bar"></p>
                <p className="detail-more-info-spot">장소</p>
              </div>
              <div className="detail-more-info-data">
                <p className="detail-more-info-bold">{data.MAIN_PLACE}</p>
                <p className="detail-more-info-detail-location">{data.ADDR1}</p>
              </div>
            </div>
          </div>

          <div className="detail-more-info tw">
            <div className="detail-more-info-tit">
              <div className="detail-more-info-title">
                <p className="detail-more-info-bar"></p>
                <p className="detail-more-info-spot">교통정보</p>
              </div>
              <div className="detail-more-info-data">
                <p className="detail-more-info-bold">
                  {data.TRFC_INFO ? data.TRFC_INFO : "정보없음"}
                </p>
              </div>
            </div>
          </div>

          <div className="detail-more-info tw">
            <div className="detail-more-info-tit">
              <div className="detail-more-info-title">
                <p className="detail-more-info-bar"></p>
                <p className="detail-more-info-spot">입장료</p>
              </div>
              <div className="detail-more-info-data">
                <p className="detail-more-info-bold">
                  {data.USAGE_AMOUNT ? data.USAGE_AMOUNT : "정보없음"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
