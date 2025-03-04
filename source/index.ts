
import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";

function parseaParams(argv: string[]): ContactsControllerOptions {
  const resultado = minimist(argv);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const result = controller.processOptions(params);
  console.log(result);
}

main();

/*
function parseaParams(argv: string[]): ContactsControllerOptions {
  const resultado = minimist(argv, {
    string: ["params"], // Asegura que 'params' sea tratado como string
    alias: { a: "action", p: "params" }
  });

  return {
    action: resultado.action,
    params: resultado.params ? safeParseJSON(resultado.params) : {}, // ✅ Maneja JSON seguro
  };
}

function safeParseJSON(jsonString: string): any {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("⚠️ Error al parsear JSON en params:", jsonString);
    return {}; // Devuelve un objeto vacío si hay error
  }
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));

  console.log("Parámetros procesados:", params);

  const result = controller.processOptions(params);
  console.log("Resultado final:", result);
}

main();

*/