function createObject(name, subs) {
  const canal = {
    name: name,
    suscriptores: subs,
    hash: name.length * subs,
    getStatus: function () {
      return ` El canal de ${name} tiene ${subs}`;
    },
  };
  return canal;
}
const persona = createObject(`luka`, 45);
console.log(persona.getStatus());
