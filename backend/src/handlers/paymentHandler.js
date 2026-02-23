require("dotenv").config();
const { sendMail } = require("../controllers/email/notifyPayBoss.js");
const axios = require("axios");
const updateBoss = require("../controllers/Bosses/updateBoss");
const logger = require("../logger.js");
const { PAYPAL_API_CLIENT, PAYPAL_API_SECRET, PAYPAL_API } = process.env;
const PAYPAL_RETURN_URL =
  process.env.PAYPAL_RETURN_URL || "https://crm2.up.railway.app/api/capture-order";
const PAYPAL_CANCEL_URL =
  process.env.PAYPAL_CANCEL_URL || "https://crm2.up.railway.app/api/cancel-order";
const CLIENT_SUCCESS_URL =
  process.env.CLIENT_SUCCESS_URL || "https://crm-henry-34b.vercel.app/success";
const CLIENT_CANCEL_URL =
  process.env.CLIENT_CANCEL_URL || "https://crm-henry-34b.vercel.app/authentication";

const createOrder = async (req, res) => {
  const { id } = req.body;
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "99.00",
          },
        },
      ],
      application_context: {
        brand_name: "CRM.com",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `${PAYPAL_RETURN_URL}?id=${id}`,
        cancel_url: PAYPAL_CANCEL_URL,
      },
    };

    // console.log("Soy el api client", PAYPAL_API_CLIENT);
    // console.log("Soy el api secret", PAYPAL_API_SECRET);
    // console.log(PAYPAL_API);

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    // console.log(params);

    const {
      data: { access_token },
    } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    });

    // console.log(access_token);

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    logger.error("Create order failed", { error: error.message });
    res.status(500).json({ error: error.message });
  }
};

const captureOrder = async (req, res) => {
  try {
    const { token, id } = req.query;

    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    const fechaRegistro =
      response.data.purchase_units[0].payments.captures[0].create_time;
    const payDay = new Date(fechaRegistro);
    payDay.setDate(payDay.getDate() + 30);

    const data = { id, enable: true, pay_day: payDay };
    const respuesta = await updateBoss(data);

    const info = response.data;
    const dataPay = {
      ...info,
      ...response.data.purchase_units[0].payments.captures[0],
    };

    sendMail(respuesta, dataPay).catch((error) => {
      logger.error("Payment confirmation email failed", { error: error.message });
    });

    res.redirect(CLIENT_SUCCESS_URL);
  } catch (err) {
    logger.error("Capture order failed", { error: err.message });
    res.status(500).json({ error: err.message });
  }
};

const cancelOrder = (req, res) => {
  res.redirect(CLIENT_CANCEL_URL);
};

module.exports = {
  createOrder,
  captureOrder,
  cancelOrder,
};








    // let payYear = fechaRegistro.slice(0, 4);
    // let payMonth = fechaRegistro.slice(5, 7);
    // let day = fechaRegistro.slice(8, 10);
    // console.log('Soy el payMounth',payMonth);
    // console.log('Soy el payYear',payYear);
    // if(payMonth < 10){
    //   let mounth = Number(payMonth) + 1;
    //   payMonth = 0 + String(mounth)
    // } else if(payMonth == 12) {
    //   let year = Number(payYear) + 1;
    //   payYear = String(year);
    //   payMonth = '01'
    // } else {
    //   let mounth = Number(payMonth) + 1;
    //   payMonth = String(mounth);
    // }
    
    // console.log('Soy el payMounth',payMonth);
    // console.log('Soy el payYear',payYear);

    // let payDay = `${payYear}-${payMonth}-${day}`
    // console.log(payDay);
