// eslint-disable-next-line react/prop-types
const Card = ({title, desc, src}) => {
    return (
        <div className="col-4 my-5">
            <div className="card">
                <div className="card-header">
                    <h4 className={"m-0"}>{title}</h4>
                    <p className={"m-0"}>{desc}</p>
                </div>
                <div className="card-body">
                    <img src={src} className={"img-fluid rounded-1"} alt={title}/>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <div className="btn-group">
                        <button className="btn btn-sm btn-danger fs-5">-</button>
                        <button disabled={true} className={"btn btn-sm btn-secondary fs-5"}>0</button>
                        <button className="btn btn-sm btn-success fs-5">+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card