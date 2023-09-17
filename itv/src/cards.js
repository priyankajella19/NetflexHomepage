export function Card(){
    const products = [
        {Name : "movie",price : "200000",photo:"images/netflexbanner.jpg", rating : {rate: "good",count: "**"}},
    {Name : "shoes",price : "1200",photo:"images/shoes.jpg",rating : {rate: "good",count: "**"}}
    ,{Name : "sumsung buds",price : "1300",photo:"images/earbuds.jpg",rating : {rate: "good",count: "**"}},
    {Name : "laptop",price : "560000",photo:"images/laptop.jpg",rating : {rate: "good",count: "**"}},

    {Name : "movie",price : "200000",photo:"images/netflexbanner.jpg", rating : {rate: "good",count: "**"}},
    {Name : "shoes",price : "1200",photo:"images/shoes.jpg",rating : {rate: "good",count: "**"}}
    ,{Name : "sumsung buds",price : "1300",photo:"images/earbuds.jpg",rating : {rate: "good",count: "**"}},
    {Name : "laptop",price : "560000",photo:"images/laptop.jpg",rating : {rate: "good",count: "**"}},
    {Name : "movie",price : "200000",photo:"images/netflexbanner.jpg", rating : {rate: "good",count: "**"}},
    {Name : "shoes",price : "1200",photo:"images/shoes.jpg",rating : {rate: "good",count: "**"}}
    ,{Name : "sumsung buds",price : "1300",photo:"images/earbuds.jpg",rating : {rate: "good",count: "**"}},
    {Name : "laptop",price : "560000",photo:"images/laptop.jpg",rating : {rate: "good",count: "**"}}
, {Name : "movie",price : "200000",photo:"images/netflexbanner.jpg", rating : {rate: "good",count: "**"}},
{Name : "shoes",price : "1200",photo:"images/shoes.jpg",rating : {rate: "good",count: "**"}}
,{Name : "sumsung buds",price : "1300",photo:"images/earbuds.jpg",rating : {rate: "good",count: "**"}},
{Name : "laptop",price : "560000",photo:"images/laptop.jpg",rating : {rate: "good",count: "**"}}

]
    return(
        <div className="container-fluid">
            <div className="d-flex flex-wrap p-5 ">
                {
                    products.map(product=>
                    <div className="card m-2 w-15 p-2 h-25">

                        <div className="">
                            <img src={product.photo} height={100}></img>
                        </div>
                        <div className="card-header">{product.Name}</div>
                        <div className="card-body">
                           <dl>
                            <dt>price</dt>
                            <dd>{product.price}</dd>
                            <dt>rating</dt>
                            <dd>{product.rating.rate}</dd>
                            <dd>[{product.rating.count}]</dd>
                           </dl>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger"><span className="bi bi-cart4"></span>Add To Cart</button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}