import { Link } from "@inertiajs/react";

const Pagination = ({ meta }) => {
    // console.log('metaa = ', meta)
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div>
            {/* {console.log('metaa = ', meta)} */}
            <div className="btn-group">
                {prev && <Link href={prev} className="btn">«</Link>}
                <button className="btn">{current}</button>
                {next && <Link href={next} className="btn">»</Link>}
            </div>
        </div>
    )
}

export default Pagination