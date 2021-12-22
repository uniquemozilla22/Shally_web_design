import React from 'react'

const Carousel = ({ img }) => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
                {img.map((key, value) => {
                    console.log(key, value)
                    return <div class={"carousel-item " + (value == 0 ? "active" : "")}>
                        <img
                            src={key}
                            class="d-block w-100"
                            alt={key + value}
                        />
                    </div>
                })}


            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-mdb-target="#carouselExampleControls"
                data-mdb-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
