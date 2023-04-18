import "./Detail.scss";
import data from "./data.json";
export default function Detail() {
  return(
    <section>
        <div>
            <div>
                <img src={data.MAIN_IMG_THUMB}/>
            </div>
            <div>
                <div>
                    <p>{data.MAIN_TITLE}</p>
                    <p>{data.SUBTITLE}</p>
                    <p>{data.ITEMCNTNTS}</p>
                </div>
                <div>
                    <div>
                        <p>장소</p>
                        <p>{data.MAIN_PLACE}</p>
                        <p>{data.ADDR1}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
