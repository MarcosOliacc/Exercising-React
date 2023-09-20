export default function Coment(prop) {
    return (
        <div>
            <div id="perf">
                <img src="/no-face.jpg" alt="" />
                <h2>{prop.email}</h2>
            </div>
            <p>{prop.coment}</p>
            <p id="right">{prop.date}</p>
            
        </div>
    )
}