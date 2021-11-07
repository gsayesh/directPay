// import "../App.css";
import "./checkout.css";
import { useHistory } from "react-router";

function Checkoutt() {
  const history = useHistory();

  return (
    <div className="Checkoutt">
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                  <div class="input-group w-100">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                    <span class="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div class="widget-header icontext">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-user"></i>
                    </a>
                    <div class="text">
                      <span class="text-muted">Welcome!</span>
                      <div>
                        {/* <a href="#">Sign in</a> |<a href="#">Register</a> */}
                        <a href="#">GS Ayesh</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">Checkout</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <main class="col-md-6">
              <div class="card">
                {/* <table class="table table-borderless table-shopping-cart">
                  <thead class="text-muted">
                    <tr class="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th scope="col" class="text-right" width="200">
                        {" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/1.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Apple Macbook Pro
                            </a>
                            <p class="text-muted small">
                              Size: 13 Inch, Color: Silver, <br /> Model: 2020 Early
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$1299.00</var>
                          <small class="text-muted"> $1289.00 each </small>
                        </div>
                      </td>
                      <td class="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          class="btn btn-light mr-2"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="" class="btn btn-light">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/3.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Apple Mac pro
                            </a>
                            <p class="text-muted small">
                              Size: Tower model (base), Color: Silver, <br /> Model: 2019 Late
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$6999.00</var>
                          <small class="text-muted"> $6759.00 </small>
                        </div>
                      </td>
                      <td class="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          class="btn btn-light mr-2"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="" class="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <figure class="itemside">
                          <div class="aside">
                            <img
                              src="assets/images/items/4.jpg"
                              class="img-sm"
                            />
                          </div>
                          <figcaption class="info">
                            <a href="#" class="title text-dark">
                              Apple iPhone 13
                            </a>
                            <p class="small text-muted">
                              Size: 128GB, Color: pink, model: International version
                            </p>
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select class="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </td>
                      <td>
                        <div class="price-wrap">
                          <var class="price">$829.00</var>
                          <small class="text-muted"> $799.00 each</small>
                        </div>
                      </td>
                      <td class="text-right">
                        <a
                          data-original-title="Save to Wishlist"
                          title=""
                          href=""
                          class="btn btn-light mr-2"
                          data-toggle="tooltip"
                        >
                          {" "}
                          <i class="fa fa-heart"></i>
                        </a>
                        <a href="" class="btn btn-light btn-round">
                          {" "}
                          Remove
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table> */}

                <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header p-0" id="headingTwo">
                      <h2 class="mb-0">
                        {" "}
                        <button
                          class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            {" "}
                            <span>Al-Rajhi Bank 077-777-77772525</span>{" "}
                            <img
                              src="https://data.directfn.com/error-pages/images/DirectFN.png"
                              width="30"
                            />{" "}
                          </div>
                        </button>{" "}
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        {" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="OTP"
                        />{" "}
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header p-0" id="headingTwo">
                      <h2 class="mb-0">
                        {" "}
                        <button
                          class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            {" "}
                            <span>Alawwal Bank 077-565-1452258</span>{" "}
                            <img
                              src="https://data.directfn.com/error-pages/images/DirectFN.png"
                              width="30"
                            />{" "}
                          </div>
                        </button>{" "}
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        {" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="OTP"
                        />{" "}
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header p-0" id="headingTwo">
                      <h2 class="mb-0">
                        {" "}
                        <button
                          class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            {" "}
                            <span>
                              Direct Pay / Open Banking (Add bank)
                            </span>{" "}
                            <img
                              src="https://data.directfn.com/error-pages/images/DirectFN.png"
                              width="30"
                            />{" "}
                          </div>
                        </button>{" "}
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse show"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                      <select name="banks" id="banks" class="form-control">
                          <option
                            onClick={() => {
                              history.push("/login");
                            }}
                            value="alinma"
                          >
                            Alinma Bank
                          </option>
                          <option value="alrajhi">Al-Rajhi Bank</option>
                          <option value="saan">Saudi British Bank (SAAB)</option>
                          <option value="bsf">Banque Saudi Fransi</option>
                          <option value="ab">Alawwal Bank</option>
                          <option value="and">Arab National Ban.</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header p-0" id="headingTwo">
                      <h2 class="mb-0">
                        {" "}
                        <button
                          class="btn btn-light btn-block text-left collapsed p-3 rounded-0 border-bottom-custom"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            {" "}
                            <span>Paypal</span>{" "}
                            <img
                              src="https://i.imgur.com/7kQEsHU.png"
                              width="30"
                            />{" "}
                          </div>
                        </button>{" "}
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        {" "}
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Paypal email"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-0">
                      <h2 class="mb-0">
                        {" "}
                        <button
                          class="btn btn-light btn-block text-left p-3 rounded-0"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <div class="d-flex align-items-center justify-content-between">
                            {" "}
                            <span>Credit card</span>
                            <div class="icons">
                              {" "}
                              <img
                                src="https://i.imgur.com/2ISgYja.png"
                                width="30"
                              />{" "}
                              <img
                                src="https://i.imgur.com/W1vtnOV.png"
                                width="30"
                              />{" "}
                              <img
                                src="https://i.imgur.com/35tC99g.png"
                                width="30"
                              />{" "}
                              <img
                                src="https://i.imgur.com/2ISgYja.png"
                                width="30"
                              />{" "}
                            </div>
                          </div>
                        </button>{" "}
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      class="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body payment-card-body">
                        {" "}
                        <span class="font-weight-normal card-text">
                          Card Number
                        </span>
                        <div class="input">
                          {" "}
                          <i class="fa fa-credit-card"></i>{" "}
                          <input
                            type="text"
                            class="form-control"
                            placeholder="0000 0000 0000 0000"
                          />{" "}
                        </div>
                        <div class="row mt-3 mb-3">
                          <div class="col-md-6">
                            {" "}
                            <span class="font-weight-normal card-text">
                              Expiry Date
                            </span>
                            <div class="input">
                              {" "}
                              <i class="fa fa-calendar"></i>{" "}
                              <input
                                type="text"
                                class="form-control"
                                placeholder="MM/YY"
                              />{" "}
                            </div>
                          </div>
                          <div class="col-md-6">
                            {" "}
                            <span class="font-weight-normal card-text">
                              CVC/CVV
                            </span>
                            <div class="input">
                              {" "}
                              <i class="fa fa-lock"></i>{" "}
                              <input
                                type="text"
                                class="form-control"
                                placeholder="000"
                              />{" "}
                            </div>
                          </div>
                        </div>{" "}
                        <span class="text-muted certificate-text">
                          <i class="fa fa-lock"></i> Your transaction is secured
                          with ssl certificate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside class="col-md-6">
              <div class="card">
                <div class="d-flex justify-content-between p-3">
                  <div class="d-flex flex-column">
                    {" "}
                    <span>
                      Sub Total <i class="fa fa-caret-down"></i>
                    </span>
                  </div>
                  <div class="mt-1">
                    {" "}
                    <sup class="super-price">$8853.13</sup>{" "}
                    {/* <span class="super-month">/Month</span>{" "} */}
                  </div>
                </div>
                <hr class="mt-0 line" />
                <div class="p-3">
                  <div class="d-flex justify-content-between mb-2">
                    {" "}
                    <span>Shipping cost</span> <span>$20.00</span>{" "}
                  </div>
                  <div class="d-flex justify-content-between">
                    {" "}
                    <span>
                      Import chreges <i class="fa fa-clock-o"></i>
                    </span>{" "}
                    <span>2%</span>{" "}
                  </div>
                </div>
                <hr class="mt-0 line" />
                <div class="p-3 d-flex justify-content-between">
                  <div class="d-flex flex-column">
                    {" "}
                    <span>Today you pay(US Dollars)</span>{" "}
                    {/* <small>After 30 days $9.59</small>{" "} */}
                  </div>{" "}
                  <span>$9030.60</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section class="section-name bg padding-y">
        <div class="container">
          <h6>Payment and refund policy</h6>
          <p>
            Sellers are required to deliver the item as it was described in the
            listing. If the buyer receives the wrong item, or the item arrives
            broken, damaged, or faulty (and was not clearly described as such),
            they are entitled to return it for a refund, even if the seller
            doesn't offer returns. Buyers and sellers may agree to another
            solution, such as a full or partial refund while the buyer keeps the
            item, or a replacement item instead of a refund. Both buyers and
            sellers must meet all applicable return requirements. If an item is
            being returned, the seller is responsible for return shipping.
          </p>
        </div>
      </section>

      <footer class="section-footer border-top padding-y">
        <div class="container">
          <p class="float-md-right">
            &copy; Copyright 2021 All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Checkoutt;
