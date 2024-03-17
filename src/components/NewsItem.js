import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, sourceUrl, date, source } = props;
    let defaultImage = "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg";

    return (
        <div className="my-3">
            <div className="card">
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                }
                }>
                    <span className="badge bg-primary"> {source} </span>
                </div>
                <img src={!imageUrl ? defaultImage : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0, 55)}...  </h5>
                    <p className="card-text">{description.slice(0, 140)}... </p>
                </div>
                <div className="card-footer">
                    <p className="card-text">
                        <small className="text-muted">By {`${source} - ${sourceUrl}`} <br />
                        On  {new Date(date).toGMTString().slice(0, 25)}</small>
                    </p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary mt-2">
                        <span className="mr-2 pr-2">Read More</span> &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ml-2 pl-2" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem;
