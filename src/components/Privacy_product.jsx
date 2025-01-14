import data from "../Data/DataProduct";
const Privacy_product = () => {
    return (
        <>
            <div className="card_item">
                {data.policy_product.map((item, index) => {
                    return (
                        <div className="item_problem" key={index}>
                            <div className="items">
                                <img src={item.image} alt={`Problem image ${index}`} />
                            </div>
                            <div className="textPro" style={{padding:"20px"}}>
                                <h1>{item.policy}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    )

}
export default Privacy_product;