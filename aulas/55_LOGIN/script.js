import { Login } from "./login.js";

import { Cxmsg } from "../52_CAIXAS_DE_DIALOGO_PERSONALIZADAS/script.js";

const callback_ok = () => {};

const callback_notOk = () => {
  const config = {
    cor: "#f00",
    tipo: "ok",
    comando_sn: null,
  };

  Cxmsg.mostrar(config,"Login não efetuado!", "Tente de novo.");
};

Login.login(callback_ok, callback_notOk);
