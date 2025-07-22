import crypto from "crypto";
import axios from "axios";

//uuid import
import { v4 as uuid } from "uuid";

//Payment
const MERCHANT_ID = "PGTESTPAYUAT86";
const MERCHANT_KEY = "96434309-7796-489d-8924-ab56988a6076";
const MERCHANT_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_STATUS_URL =
  "https://api-preprod.phonepe.com/apis/pg-sandbox/status";
//redirecturl
const redirectUrl = "http://localhost:3000/api/payments/status";

const successUrl = "http://localhost:5173/";
const failureUrl = "http://localhost:5173/payment-failure";

export const addPaymentGateway = async (req, res) => {
  const { name, mobileNumber, amount } = req.body;
  const orderId = uuid();

  const paymentPayload = {
    merchantId: MERCHANT_ID,
    merchantUserId: name,
    mobileNumber: mobileNumber,
    merchantTransactionId: orderId,
    amount: amount * 100, // paise
    redirectUrl: `${redirectUrl}/?id=${orderId}`,
    redirectMode: "POST",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const payload = Buffer.from(JSON.stringify(paymentPayload)).toString(
    "base64"
  );
  const keyIndex = 1;
  const string = payload + "/pg/v1/pay" + MERCHANT_KEY;
  const sha256 = crypto.createHash("sha256").update(string).digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const options = {
    method: "POST",
    url: `${MERCHANT_BASE_URL}/pg/v1/pay`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": MERCHANT_ID,
    },
    data: {
      request: payload,
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);

    const urlRedirect =
      response.data?.data?.instrumentResponse?.redirectInfo?.url;

    res.status(200).json({
      msg: "Order created",
      url: urlRedirect,
      transactionId: orderId,
    });
  } catch (error) {
    console.log("error in payment", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
};

export const addStatus = async (req, res) => {
  const merchantTransactionId = req.query.id;

  const keyIndex = 1;
  const path = `/pg/v1/status/${MERCHANT_ID}/${merchantTransactionId}`;
  const checksumString = path + MERCHANT_KEY;

  const sha256 = crypto
    .createHash("sha256")
    .update(checksumString)
    .digest("hex");
  const checksum = sha256 + "###" + keyIndex;

  const option = {
    method: "GET",
    url: `${MERCHANT_BASE_URL}${path}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": MERCHANT_ID,
    },
  };

  try {
    const response = await axios.request(option);

    console.log("Transaction status response:", response.data);

    if (response.data?.success && response.data.code === "PAYMENT_SUCCESS") {
      return res.redirect(successUrl);
    } else {
      return res.redirect(failureUrl);
    }
  } catch (error) {
    console.error(
      "Error checking status:",
      error.response?.data || error.message
    );
    return res.redirect(failureUrl);
  }
};
