import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = ()=>{
    return(
        <>
            <Meta title='Wishlist' />
            <BreadCrumb title='Wishlist' />
            <div className="wishlist-wrapper home-wrapper-2 p-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                                </div>
                                <div className="px-3 py-2">
                                    <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price">$500</h6>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                                </div>
                                <div className="px-3 py-2">
                                    <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price">$500</h6>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                                <div className="wishlist-card-image ">
                                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                                </div>
                                <div className="px-3 py-2">
                                    <h5 className="title">Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</h5>
                                    <h6 className="price">$500</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist