import { ContactsCollection } from "./models";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import minimist from "minimist";

function parseaParams(argv): ContactsControllerOptions {
  const resultado = minimist(argv);
  console.log(resultado);

  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  console.log(params);
  const result = controller.processOptions(params);
  console.log(result);
}

main();
