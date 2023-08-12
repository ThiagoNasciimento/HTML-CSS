new TypeIt("#companionMethods", {
    speed: 70,
    waitUntilVisible: true,
  })
  .type("Olá, ")
  .type("Meu name é", { delay: 300 })
  .move(-4)
  .delete(1)
  .type("o")
  .move(null, { to: "END" })
  .type(" Thiago Nacimen")
  .move(-5)
  .pause(300)
  .type("s")
  .move(null, { to: "END" })
  .type("to")
  .type(" e estou aprendendo ")
  .move(null, { to: "END" })
  .type("HTML")
  .pause(500)
  .break({ delay: 500 })
  .delete(5)
  .type("CSS")
  .exec(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, 1000);
    });
  })
  .delete(3)
  .pause(300)
  .type("JavaScript.")
  .go();
