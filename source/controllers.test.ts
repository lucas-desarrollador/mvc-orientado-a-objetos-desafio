import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as contactsObject from "./contacts.json";

test("Testeo el constructor del controller", (t) => {
  const modelController = new ContactsController();
  modelController.contacts.load();
  console.log("contacts del constructor", modelController.contacts.getAll());
  t.truthy(modelController); // Verifica que se haya creado la instancia

  t.deepEqual(contactsObject, modelController.contacts.getAll());
 
  // Verifica que no se pueda agregar un contacto con un ID existente
  t.falsy(modelController.contacts.addOne({ id: 1, name: "Ana" }));
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  
  // Simula cargar datos si es necesario
  controller.contacts.load(); // Asegúrate de que este método cargue contactos en la colección

  const options: ContactsControllerOptions = {
    action: "get",
    params: { id: 11, name: "Tomas" } 
  };
  const result = controller.processOptions(options);
  // Define el valor esperado
  const expectedValue = { id: 11, name: "Tomas" };
  // Verifica que el resultado sea el esperado
  t.deepEqual(result, expectedValue);

  const controller2 = new ContactsController();
  controller2.contacts.load();
  const options2: ContactsControllerOptions = {
    action: "save",
    params: { id: 43, name: "Benji" } 
  };
  const result2 = controller2.processOptions(options2);
  t.deepEqual(result2, contactsObject);
  console.log("coleccion del options2 con SAVE");
  console.log(result2);
});


test("Testeo de si entendí como funciona el testing de AVA", (t) => {
  t.truthy(true);
  t.falsy(false);
  t.deepEqual({ a: 1 }, { a: 1 });
  t.pass("¡Todo funciona!");  
});