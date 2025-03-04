import test from "ava";
import { ContactsController } from "./controllers";
import * as contactsObject from "./contacts.json";

interface ContactsControllerOptions {
  action: "get" | "save" | null | undefined;
  params: { id: number; name: string };
}

test("Testeo el constructor del controller", (t) => {
  const modelController = new ContactsController();
  modelController.contacts.load();
  t.truthy(modelController); // Verifica que se haya creado la instancia

  t.deepEqual(contactsObject, modelController.contacts.getAll());

  const mockContact = {
    id: 13,
    name: "Cocoloco",
  };

  modelController.contacts.addOne(mockContact);
  const chekContact = modelController.processOptions({ action: "get", params: mockContact });
  t.deepEqual(chekContact, mockContact);
  const chekContact2 = modelController.processOptions({ action: "save", params: {id:8, name:"Lucas"} });
  t.falsy(chekContact2);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();
  
  // Simula cargar datos si es necesario
  controller.contacts.load(); // Asegúrate de que este método cargue contactos en la colección

  const options: ContactsControllerOptions = {
    action: "get",
    params: { id: 1, name: "Test Name" } // Cambia esto según lo que necesites probar
  };

  const result = controller.processOptions(options);
  
  // Define el valor esperado
  const expectedValue = { id: 1, name: "Ana" }; // Asegúrate de que este contacto exista

  // Verifica que el resultado sea el esperado
  t.deepEqual(result, expectedValue);
});


test("Testeo de si entendí como funciona el testing de AVA", (t) => {
  t.truthy(true);
  t.falsy(false);
  t.deepEqual({ a: 1 }, { a: 1 });
  t.pass("¡Todo funciona!");  
});