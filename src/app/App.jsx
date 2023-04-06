import React from "react";

export default function App() {
  return (
    <>
      <section
        id="topbar"
        className="d-flex align-items-center fixed-top topbar-transparent"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+91 9876 5321</span>
          </i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center">
            <span>Mon-Sat: 07:00 AM - 23:00 PM</span>
          </i>
        </div>
      </section>

      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <div className="logo me-auto">
            <h1>
              <a href="index.html">Farm2Home</a>
            </h1>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#menu">
                  Menu
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#specials">
                  Specials
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#events">
                  Events
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#chefs">
                  Orders
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span>
                      <i className="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#book-a-table" className="book-a-table-btn scrollto">
            Buy Vegies
          </a>
        </div>
      </header>

      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            data-bs-interval="5000"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol
              className="carousel-indicators"
              id="hero-carousel-indicators"
            ></ol>

            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage:
                    "url('https://thumbs.dreamstime.com/b/cabbage-plantations-grow-field-vegetable-rows-farming-agriculture-landscape-agricultural-land-crops-selective-fo-focus-130169562.jpg')",
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      <span>Farm to Home</span>
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      The common place to buy your fresh products directly from
                      the farmers.
                    </p>
                    <div>
                      <a
                        href="#menu"
                        className="btn-menu animate__animated animate__fadeInUp scrollto"
                      >
                        Our Menu
                      </a>
                      <a
                        href="#book-a-table"
                        className="btn-book animate__animated animate__fadeInUp scrollto"
                      >
                        Buy products
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage:
                    "url('https://c4.wallpaperflare.com/wallpaper/534/654/494/leaves-green-depth-of-field-nature-wallpaper-preview.jpg')",
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Now shop while you&apos;re at home
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div>
                      <a
                        href="#menu"
                        className="btn-menu animate__animated animate__fadeInUp scrollto"
                      >
                        Our Menu
                      </a>
                      <a
                        href="#book-a-table"
                        className="btn-book animate__animated animate__fadeInUp scrollto"
                      >
                        Buy Vegies
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{
                  backgroundImage:
                    "url('https://theagrotechdaily.com/wp-content/uploads/2022/10/adobestock_206333246-1920x1280-1.jpeg')",
                }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2 className="animate__animated animate__fadeInDown">
                      Track your order
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea
                      ut et est quaerat sequi nihil ut aliquam. Occaecati alias
                      dolorem mollitia ut. Similique ea voluptatem. Esse
                      doloremque accusamus repellendus deleniti vel. Minus et
                      tempore modi architecto.
                    </p>
                    <div>
                      <a
                        href="#menu"
                        className="btn-menu animate__animated animate__fadeInUp scrollto"
                      >
                        Our Products
                      </a>
                      <a
                        href="#book-a-table"
                        className="btn-book animate__animated animate__fadeInUp scrollto"
                      >
                        Buy Vegies
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </a>

            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-5 align-items-stretch video-box"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?cs=srgb&dl=pexels-mark-stebnicki-2255935.jpg&fm=jpg')",
                }}
              >
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  className="venobox play-btn mb-4"
                  data-vbtype="video"
                  data-autoplay="true"
                ></a>
              </div>

              <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                <div className="content">
                  <h3>About Us</h3>
                  <p>
                    We are an organisation that connect people with the farmers
                    and assure every consumers will get a fresh assure products
                    in their kitchen.
                  </p>
                  <p className="fst-italic">Impact of our idea on society</p>
                  <ul>
                    <li>
                      <i className="bx bx-check-double"></i>Now farmers will
                      able to sell their products to consumers in villages,
                      towns and cities.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> In this
                      application, the users will be able to buy the fresh
                      groceries directly from farmers through this web app.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> Farmers gets a
                      reasonable price for their fresh product by eliminating
                      the intermediate person.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i>Get the fresh and
                      organic grocery as low as possible
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> Fast and Secure
                      Checkout: Pay by UPI, Net-banking, credit and debit cards
                      options and e-wallet.
                    </li>
                    <li>
                      <i className="bx bx-check-double"></i> The users will be
                      able to check the freshness of the groceries by fresh
                      meter.The fresh meter is a centralized system which
                      evaluates the freshness of the products right from the
                      harvest till it reaches the hands of the consumer.
                    </li>
                  </ul>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="why-us">
          <div className="container">
            <div className="section-title">
              <h2>
                Why choose <span>Our Application?</span>
              </h2>
              <p>
                Our application is user-friendly and easy to use. And the
                following are the reasons.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="box">
                  <span>01</span>
                  <h4>Easy to use</h4>
                  <p>
                    Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                    consectetur ducimus vero placeat
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <span>02</span>
                  <h4>Directly Speak to the Farmers</h4>
                  <p>
                    Dolorem est fugiat occaecati voluptate velit esse. Dicta
                    veritatis dolor quod et vel dire leno para dest
                  </p>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="box">
                  <span>03</span>
                  <h4>Track Your Order</h4>
                  <p>
                    Molestiae officiis omnis illo asperiores. Aut doloribus
                    vitae sunt debitis quo vel nam quis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="menu">
          <div className="container">
            <div className="section-title">
              <h2>
                Check our <span>Vegies</span>
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="menu-flters">
                  <li data-filter="*" className="filter-active">
                    Show All
                  </li>
                  <li data-filter=".filter-starters">Vegetables</li>
                  <li data-filter=".filter-salads">Fruits</li>
                  <li data-filter=".filter-specialty">Non-Veg</li>
                </ul>
              </div>
            </div>

            <div className="row menu-container">
              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Lobster Bisque</a>
                  <span>₹5.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Bread barrel</a>
                  <span>₹6.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Crab Cake</a>
                  <span>₹7.95</span>
                </div>
                <div className="menu-ingredients">
                  A delicate crab cake served on a toasted roll with lettuce and
                  tartar sauce
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Caesar Selections</a>
                  <span>₹8.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Tuscan Grilled</a>
                  <span>₹9.95</span>
                </div>
                <div className="menu-ingredients">
                  Grilled chicken with provolone, artichoke hearts, and roasted
                  red pesto
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <div className="menu-content">
                  <a href="#">Mozzarella Stick</a>
                  <span>₹4.95</span>
                </div>
                <div className="menu-ingredients">
                  Lorem, deren, trataro, filede, nerada
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Greek Salad</a>
                  <span>₹9.95</span>
                </div>
                <div className="menu-ingredients">
                  Fresh spinach, crisp romaine, tomatoes, and Greek olives
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <div className="menu-content">
                  <a href="#">Spinach Salad</a>
                  <span>₹9.95</span>
                </div>
                <div className="menu-ingredients">
                  Fresh spinach with mushrooms, hard boiled egg, and warm bacon
                  vinaigrette
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <div className="menu-content">
                  <a href="#">Lobster Roll</a>
                  <span>₹12.95</span>
                </div>
                <div className="menu-ingredients">
                  Plump lobster meat, mayo and crisp lettuce on a toasted bulky
                  roll
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specials" className="specials">
          <div className="container">
            <div className="section-title">
              <h2>
                Check our <span>Specials</span>
              </h2>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Modi sit est
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Unde praesentium sed
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Pariatur explicabo vel
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                      Nostrum qui quasi
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                      Iusto ut expedita aut
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Architecto ut aperiam autem id</h3>
                        <p className="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Et nobis maiores eius. Voluptatibus ut enim blanditiis
                          atque harum sint. Laborum eos ipsum ipsa odit magni.
                          Incidunt hic ut molestiae aut qui. Est repellat minima
                          eveniet eius et quis magni nihil. Consequatur dolorem
                          quaerat quos qui similique accusamus nostrum rem vero
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/specials-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p className="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Ea ipsum voluptatem consequatur quis est. Illum error
                          ullam omnis quia et reiciendis sunt sunt est. Non
                          aliquid repellendus itaque accusamus eius et velit
                          ipsa voluptates. Optio nesciunt eaque beatae accusamus
                          lerode pakto madirna desera vafle de nideran pal
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/specials-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Impedit facilis occaecati odio neque aperiam sit
                        </h3>
                        <p className="fst-italic">
                          Eos voluptatibus quo. Odio similique illum id quidem
                          non enim fuga. Qui natus non sunt dicta dolor et. In
                          asperiores velit quaerat perferendis aut
                        </p>
                        <p>
                          Iure officiis odit rerum. Harum sequi eum illum
                          corrupti culpa veritatis quisquam. Neque
                          necessitatibus illo rerum eum ut. Commodi ipsam minima
                          molestiae sed laboriosam a iste odio. Earum odit
                          nesciunt fugiat sit ullam. Soluta et harum voluptatem
                          optio quae
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/specials-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Fuga dolores inventore laboriosam ut est accusamus
                          laboriosam dolore
                        </h3>
                        <p className="fst-italic">
                          Totam aperiam accusamus. Repellat consequuntur iure
                          voluptas iure porro quis delectus
                        </p>
                        <p>
                          Eaque consequuntur consequuntur libero expedita in
                          voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                          debitis quis velit. Eum ex maxime error in consequatur
                          corporis atque. Eligendi asperiores sed qui veritatis
                          aperiam quia a laborum inventore
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/specials-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p className="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p>
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/specials-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="events">
          <div className="container">
            <div className="section-title">
              <h2>
                Organize Your <span>Events</span> in our Application
              </h2>
            </div>

            <div className="events-slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img
                        src="assets/img/event-birthday.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Birthday Parties</h3>
                      <div className="price">
                        <p>
                          <span>₹189</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i> Duis aute irure
                          dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img
                        src="assets/img/event-private.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Private Parties</h3>
                      <div className="price">
                        <p>
                          <span>₹290</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i> Duis aute irure
                          dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img
                        src="assets/img/event-custom.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Custom Parties</h3>
                      <div className="price">
                        <p>
                          <span>₹99</span>
                        </p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li>
                          <i className="bi bi-check-circle"></i> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i> Duis aute irure
                          dolor in reprehenderit in voluptate velit.
                        </li>
                        <li>
                          <i className="bi bi-check-circle"></i> Ullamco laboris
                          nisi ut aliquip ex ea commodo consequat.
                        </li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="book-a-table" className="book-a-table">
          <div className="container">
            <div className="section-title">
              <h2>
                Buy <span>Fresh</span> Products
              </h2>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <form
              action="forms/book-a-table.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-lg-4 col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                  <input
                    type="text"
                    name="date"
                    className="form-control"
                    id="date"
                    placeholder="Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="time"
                    id="time"
                    placeholder="Time"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                  <input
                    type="number"
                    className="form-control"
                    name="people"
                    id="people"
                    placeholder="# of people"
                    data-rule="minlen:1"
                    data-msg="Please enter at least 1 chars"
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your booking request was sent. We will call back or send an
                  Email to confirm your reservation. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </section>

        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <div className="section-title">
              <h2>
                Some photos from <span>Our Farmers</span>
              </h2>
              <p></p>
            </div>

            <div className="row g-0">
              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="https://images.pexels.com/photos/5202203/pexels-photo-5202203.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="gallery-lightbox"
                  >
                    <img
                      src="https://images.pexels.com/photos/5202203/pexels-photo-5202203.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="gallery-lightbox"
                  >
                    <img
                      src="https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=600"
                      style={{ height: "100%" }}
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="gallery-lightbox"
                  >
                    <img
                      src="https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a
                    href="https://images.pexels.com/photos/14874005/pexels-photo-14874005.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="gallery-lightbox"
                  >
                    <img
                      src="https://images.pexels.com/photos/14874005/pexels-photo-14874005.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 d-none">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-5.jpg"
                    className="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-5.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 d-none">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-6.jpg"
                    className="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-6.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 d-none">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-7.jpg"
                    className="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 d-none">
                <div className="gallery-item">
                  <a
                    href="assets/img/gallery/gallery-8.jpg"
                    className="gallery-lightbox"
                  >
                    <img
                      src="assets/img/gallery/gallery-8.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="chefs" className="chefs d-none">
          <div className="container">
            <div className="section-title">
              <h2>
                Our Proffesional <span>Chefs</span>
              </h2>
              <p>
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img
                      src="assets/img/chefs/chefs-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img
                      src="assets/img/chefs/chefs-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member">
                  <div className="pic">
                    <img
                      src="assets/img/chefs/chefs-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                    <div className="social">
                      <a href="">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href="">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials d-none">
          <div className="container position-relative">
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-4.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-5.jpg"
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                    </div>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure
                      aliqua veniam tempor noster veniam enim culpa labore duis
                      sunt culpa nulla illum cillum fugiat legam esse veniam
                      culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>
                <span>Contact</span> Us
              </h2>
              <p>Contact the us through the farmers.</p>
            </div>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31337.13858100459!2d76.9528855!3d10.95262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bdeb7818fcb%3A0xbce7d490fd8f3738!2sKuniyamuthur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1675411706732!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "350px" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="container mt-5">
            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-3 col-md-6 info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>
                    Kunniyamuthur
                    <br />
                    Coimbatore - 641001
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                  <i className="bi bi-clock"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Saturday:
                    <br />
                    07:00 AM - 23:00 PM
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>
                    info@farm2home.com
                    <br />
                    contact@farm2home.com
                  </p>
                </div>

                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>
                    +91 98765 43210
                    <br />
                    +91 98765 43211
                  </p>
                </div>
              </div>
            </div>

            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <h3>Farm2Home</h3>
          <p>Stay connect with us on Social media!</p>
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>AspireCoders</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
