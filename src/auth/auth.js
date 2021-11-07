import React, { useState } from "react";

import "./auth.css";
import { useHistory, useLocation } from "react-router";

export default function Auth() {
  const history = useHistory();

  const location = useLocation();

  const bank = location.state.sBank;
  let bankCode = null;

  let code = Math.floor(Math.random() * 90000000000);

  console.log("Code", code);

  switch (bank) {
    case "alinma":
      bankCode = "Alinma Bank " + code;
      break;
    case "alrajhi":
      bankCode = "Al-Rajhi Bank " + code;
      break;
    case "saan":
      bankCode = "Saudi British Bank " + code;
      break;
    case "bsf":
      bankCode = "Banque Saudi Fransi " + code;
      break;
    case "ab":
      bankCode = "Alawwal Bank " + code;
      break;
    case "and":
      bankCode = "Arab National Bank " + code;
      break;
    default:
  }

  return (
    <div class="passport-authorize">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card card-default">
              <div class="card-header">Authorization Request</div>
              <div class="card-body">
                <p>
                  <strong>DirectPay</strong> is requesting permission to access
                  your account.
                </p>

                <div class="scopes">
                  <p>
                    <strong>This application will be able to:</strong>
                  </p>

                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="viewAccount"
                        name="viewAccount"
                        value="viewAccount"
                      />{" "}
                      View my account details
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="transferMoney"
                        name="transferMoney"
                        value="transferMoney"
                      />{" "}
                      Transfer money
                    </li>
                  </ul>
                </div>

                <div class="buttons">
                  <form method="post" action="post">
                    <input type="hidden" name="state" value="fgjhj" />
                    <input type="hidden" name="client_id" value="ghgh" />
                    <input type="hidden" name="auth_token" value="ghghgh" />
                    <button type="submit" class="btn btn-success btn-approve" onClick={() => {
            history.push({
              pathname: "/checkout",
              state: { sBank: bankCode },
            });
          }}>
                      Authorize
                    </button>
                  </form>
                  <form method="post" action="hghghj">
                    <input type="hidden" name="state" value="gjgjgj" />
                    <input type="hidden" name="client_id" value="hghgh" />
                    <input type="hidden" name="auth_token" value="ghghgh" />
                    <button class="btn btn-danger"
                    onClick={() => {
                        history.push({
                          pathname: "/auth",
                          state: { sBank: null },
                        });
                      }}>Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
