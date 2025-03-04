import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(contactsObject, model.getAll());
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  //console.log(model.getAll());
  t.deepEqual(model.getAll(), [mockContact]);
});

test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 7,
    name: "Gabi",
  };
  model.addOne(mockContact);
  model.save();

  const fileContent = jsonfile.readFileSync("./source/contacts.json");
  
  t.deepEqual(fileContent, model.getAll());
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 22,
    name: "Viki",
  };
  model.addOne(mockContact);
  const one = model.getOneById(22);
  t.deepEqual(one, mockContact);
  //console.log(model.getAll());
});
