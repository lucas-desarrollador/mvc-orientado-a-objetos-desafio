import * as jsonfile from "jsonfile";

// este import existe solo para que tsc lo tome y lo copie a /build
//import "./contacts.json";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];

  load(){
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = json; 
  }
  getAll(){
    return this.data;
  }
  addOne(contact: Contact) {
    // Verifica si el ID ya existe en la colección
    const existe = this.data.some(item => item.id === contact.id);

    if (existe) {
        console.log("No se puede agregar por ID ya existente");
    } else {
        this.data.push(contact);
    }
}
  save(){
    jsonfile.writeFileSync("./source/contacts.json", this.data);
  }
  getOneById(id: number){
      const encontrado = this.data.find((contact) => {
          if (contact.id == id) {
            return true;
          }
          return false;
        });
    return encontrado;
  }
} 
export { ContactsCollection, Contact };
