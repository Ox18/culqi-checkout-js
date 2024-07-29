Culqi3DS.options = {
  showModal: true,
  showLoading: true,
  showIcon: true,
  closeModalAction: () => window.location.reload(true),
  // style: {
  //     btnColor: "red",
  //     btnTextColor: "yellow",
  // },
};

Culqi3DS.publicKey = CULQI_PUBLIC_KEY;

const generateCharge = async (email, tokenId, deviceId, parameters3Ds) => {
  const bodyRequest = {
    amount: 50000,
    currency_code: "PEN",
    email: email,
    token: tokenId,
    first_name: "Wilmer",
    last_name: "Delgado",
    phone_number: "999999999",
    device_finger_print_id: deviceId,
  };

  console.log("Body Request: ", bodyRequest);
};

async function handledContentLoad() {
  const deviceId = await Culqi3DS.generateDevice();

  if (!deviceId) {
    console.log("Ocurrio un error al generar el deviceID");
  }

  const settings = {
    title: "Culqi  store 2",
    currency: "PEN",
    amount: 8000,
    order: "ord_live_d1P0Tu1n7Od4nZdp",
  };

  const paymentMethods = {
    tarjeta: true,
    yape: true,
    billetera: true,
    bancaMovil: true,
    agente: true,
    cuotealo: true,
  };

  const options = {
    lang: "auto",
    installments: true,
    modal: true,
    container: "#culqi-container", // Opcional
    paymentMethods: paymentMethods,
    paymentMethodsSort: Object.keys(paymentMethods), // las opciones se ordenan según se configuren en paymentMethods
  };

  const client = {
    email: "culqi1@culqi.com",
  };

  const appearance = {
    theme: "default",
    hiddenCulqiLogo: false,
    hiddenBannerContent: false,
    hiddenBanner: false,
    hiddenToolBarAmount: false,
    menuType: "sliderTop", // default/sidebar / sliderTop / select
    buttonCardPayText: "Pagar tal monto", // hexadecimal
    logo: "http://www.childrensociety.ms/wp-content/uploads/2019/11/MCS-Logo-2019-no-text.jpg",
  };

  const handleCulqiAction = async () => {
    if (!Culqi.token) {
      console.log(Culqi.error);
      alert(Culqi.error.user_message);
      return;
    }

    Culqi.close();
    const tokenId = Culqi.token.id;
    console.log("Token ID: ", tokenId);
    const email = Culqi.token.email;
    console.log("Email: ", email);

    let statusCode = null;
    let objResponse = null;
    let response = null;

    response = await generateCharge(email, tokenId, deviceId);

    // if (Culqi.token) {
    //   const token = Culqi.token.id;
    //   console.log("Se ha creado un Token: ", token);
    // } else if (Culqi.order) {
    //   const order = Culqi.order;
    //   console.log("Se ha creado el objeto Order: ", order);
    // } else {
    //   console.log("Errorrr : ", Culqi.error);
    // }
  };

  const config = {
    settings,
    client,
    options,
    appearance,
  };

  console.log(CULQI_PUBLIC_KEY);
  const Culqi = new CulqiCheckout(CULQI_PUBLIC_KEY, config);

  Culqi.culqi = handleCulqiAction;

  const btn = document.getElementById("crearCharge");

  btn.addEventListener("click", () => {
    Culqi.open();
  });

  window.addEventListener(
    "message",
    async function (event) {
      if (event.origin !== window.location.origin) {
        return;
      }

      const { parameters3DS, error } = event.data;

      console.log("evento....");
      console.log(event.data);
      if (parameters3DS) {
        console.log("3ds");
      }

      if (error) {
        console.log("Ocurrio un error", error);
      }
    },
    false
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  await handledContentLoad();
});
