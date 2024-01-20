import { Link, useLocation } from "react-router-dom";

const CurrentPage=(props)=>{
    const location = useLocation();
    if(location.pathname==="/"){
        return null;
    }
    return (
        <div className="bg-maroon p-[10%] md:p-20 text-center text-white">
            <h1 className="uppercase text-lg md:text-xl tracking-widest"><Link to="/">HOME</Link> - {location.pathname.replace("/","")}</h1>
            <h1 className="capitalize text-5xl md:text-7xl font-medium my-2">{location.pathname.replace("/","")}</h1>
        </div>
    )
}
export default CurrentPage;