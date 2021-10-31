import React from "react";
import bannerOne from "../../images/banner/1.jpg";
import bannerTwo from "../../images/banner/2.jpg";
import bannerThree from "../../images/banner/3.jpg";
import Items from "./Items/Items";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="mb-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="">
              <div className="carousel-item active">
                <img src={bannerOne} className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h1>
                    Good Food For{" "}
                    <span className="text-warning">Your Everyday</span>
                  </h1>
                </div>
              </div>
              <div className="carousel-item">
                <img src={bannerTwo} className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h1>
                    Good Food <span className="text-warning">Good Life</span>
                  </h1>
                </div>
              </div>
              <div className="carousel-item">
                <img src={bannerThree} className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h1>
                    Good day <span className="text-warning">Good Food</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Items></Items>
      </section>

      {/* testimonial section */}

      <section className="container mb-5 mt-5">
        <h4 className="text-warning mt-5">Testimonials</h4>
        <h1 className="mt-5">
          <span className="text-warning fs-1">“</span> Why Our Clients Choose Us
          <span className="text-warning fs-1">”</span>
        </h1>

        <div
          id="carouselExampleCaptions"
          class="carousel slide mt-5 mb-5 w-75 m-auto"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators mb-5">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h3 className="text-warning">TOP QUALITY AND TASTE</h3>
              <p>
                Focusing on quality, Exclusive Foods brings only the best
                products to Asia from around the World. "All our products are
                made with prime ingredients that are selected with care by our
                renowned partner brands"
              </p>
            </div>
            <div class="carousel-item ">
              <h3 className="text-warning">FOOD SAFETY</h3>
              <p>
                Exclusive Foods ambition is to safeguard the health of our
                customer's clientele. All of our partners are certified
                according to British Retail Consortium Global Standards (BRC),
                Hazard Critical Control Points (HACCP) and International Food
                Standards (IFS)"
              </p>
            </div>
            <div class="carousel-item ">
              <h3 className="text-warning">PROFESSIONAL PRODUCTS</h3>
              <p>
                Our products are the perfect companion for Chef's Creativity.
                Finished or semi-finished, all our products are easy to handle
                and ready to be customized following the Chef's inspiration. As
                we only work with top food producers, quality is consistent all
                year long.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to work section */}

      <section className="container mb-5 mt-5">
        <h1>HOW IT WORKS</h1>
        <hr className="border border-4 border-dark rounded-pill w-25 m-auto" />
        <div className="row">
          <div className="col-md-4">
            <i class="fas fa-utensils mt-5 mb-4"></i>
            <h4 className="mb-4 text-warning">Choose Your Favorite</h4>
            <h6>
              Choose your favorite meals and order online or by phone. It's easy
              to customize your order.
            </h6>
          </div>
          <div className="col-md-4">
            <i class="fas fa-biking mt-5 mb-4"></i>
            <h4 className="mb-4 text-warning">We Deliver Your Meals</h4>
            <h6>
              We prepared and delivered meals arrive at your door. Duis autem
              vel eum iriure dolor in hendrerit in vulputate.
            </h6>
          </div>
          <div className="col-md-4">
            <i class="fas fa-cookie-bite mt-5 mb-4"></i>
            <h4 className="mb-4 text-warning">Eat And Enjoy</h4>
            <h6>
              No shooping, no cooking, no counting and no cleaning. Enjoy your
              healthy meals with your family.
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
