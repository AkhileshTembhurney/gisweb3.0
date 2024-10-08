import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../compStyle/LogoSlider.css"

const LogoSlider = () => {
  const settings = {
    infinite: true,
		arrows: false,
		autoplay: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		autoplaySpeed: 3000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}

		]
  };

  return (
    <div id="testimonials">
      <div className="container">
    <section className="section clients">
	<div className="container_slider">
		<div className="row justify-content-center">
            <div className="slidertxt">
			<div className="col-lg-7 ">
				<div className="section-title text-center">
					<h2>Partners who support us</h2>
					<div className="divider mx-auto my-4"></div>
					<p>Lets know moreel necessitatibus dolor asperiores illum possimus sint voluptates incidunt molestias nostrum laudantium. Maiores porro cumque quaerat.</p>
				</div>
			</div>
            </div>
		</div>
	</div>
    <div className="container_imgslider">
    <div className="row clients-logo">
    <Slider {...settings}>
     
		
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/logo-1.png" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/logo-2.png" alt="" className="img-fluid"/>
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/logo-4.png" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/datagov-logo-svg.png" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/Indiagovin.svg" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/TIApp-Icon.jpg" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/logo-5.png" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/digital_India.jpg" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/MyGovBlog.png" alt="" className="img-fluid" />
				</div>
			</div>
			<div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/logo-3.png" alt="" className="img-fluid" />
				</div>
			</div>
            <div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/greetings-logo.png" alt="" className="img-fluid" />
				</div>
			</div>
            <div >
				<div className="client-thumb">
					<img src="https://geoportal.mp.gov.in/geoportal/images/mp_logo.svg" alt="" className="img-fluid" />
				</div>
			</div>
		
	    </Slider>
        </div>
    </div>
    </section>
    </div>
    </div>
  );
};

export default LogoSlider;