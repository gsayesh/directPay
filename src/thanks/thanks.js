import { useHistory } from "react-router";
import "../App.css";
import React, { useEffect } from "react";


function Thanks() {

    const history = useHistory();
    useEffect(() => {
      document.body.style.zoom = "120%";
    });

    
  return (
    <div className="App">
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">
                <a href="#">Direct Pay / Open Pay Demonstration</a>
              </div>
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

      <section class="section-content padding-y">


        <h1 style={{fontSize: "100px"}}>Thank you! </h1> 
        <p style={{fontSize: "40px"}}>We received your purchase request;<br/> we'll ship your items shortly!</p>

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

export default Thanks;
