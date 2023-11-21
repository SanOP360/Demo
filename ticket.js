console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  // Fix the typo here
  const getColddrink = new Promise((resolve, reject) => resolve("colddrink"));

  let ticket = await promiseWifeBringingTicks;

  console.log("Wife: I have the ticket");
  console.log("Husband: We should go in");
  console.log("Wife: No, I am hungry");

  let popcorn = await getPopcorn;

  console.log("Husband: I got some popcorn");
  console.log("Husband: We should go in");
  console.log("Wife: I need a cold drink");

  let coldDrink = await getColddrink;

  console.log("Husband: I got a cold drink");
  console.log("Ok, now go then");

  return ticket;
};


preMovie().then((ticket) => {
  console.log("Person3: shows " + ticket);
  console.log("Person3: enters the hall");
});
