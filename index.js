const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const currentContacts = await listContacts();
      console.table(currentContacts);
      break;
    case "get":
      const searchContact = await getContactById(id);
      if (!searchContact) {
        return `No contact with id ${id}`;
      }
      console.log(searchContact);
      break;
    case "add":
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;
    case "remove":
      const removedContact = await removeContact(id);
      console.log(removedContact);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
