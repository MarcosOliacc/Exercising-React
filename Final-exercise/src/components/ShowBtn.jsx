import { Link } from "react-router-dom";

export default function ShowBtn(prop) {
    return (
        <>
            <Link to={`/stockitens/shownitem/${prop.ids}`}>
                <button className="showBtn">ver</button>
            </Link>
        </>
    )
}