new TypeIt("#companionMethods", {
    speed: 50,
    waitUntilVisible: true,
  })
  .type("Olá, ")
  .type("Meu name é", { delay: 300 })
  .move(-4)
  .delete(1)
  .type("o")
  .move(null, { to: "END" })
  .type(" Thiago Nacimenot")
  .move(-7)
  .pause(300)
  .type("s")
  .move(null, { to: "END" })
  .type("too")
//   .type(" e estou aprendendo")
//   .move(-4)
//   .type("o")
//   .move(null, { to: "END" })
//   .type("h of today.")
//   .pause(500)
//   .break({ delay: 500 })
//   .break({ delay: 500 })
//   .type("<em>- Will Rogers</em>")
  .go();




//   .type("Olá, meu nome é ", { delay: 100 }) // Digitação inicial
// .type("Thiago Nascimento", { delay: 150 }) // Digitação do nome
// .delete(10) // Exclusão de "Nascimento"
// .type("Silva", { delay: 100 }) // Digitação de "Silva"
// .move(null, { to: "END" }) // Move o cursor para o final
// .type(", e estou aprendendo HTML, CSS e Javascript") // Digitação final
// .pause(500) // Pausa após a digitação
// .go(); // Executa a animação