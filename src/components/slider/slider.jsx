
import './slider.css'

export function Slider(){
    return <div>
        <div
  id="carouselExampleControls"
  className="carousel slide"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src='https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=600' alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.pexels.com/photos/345415/pexels-photo-345415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>

    </div>
}