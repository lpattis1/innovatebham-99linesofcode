// Memeing a little

const massEffectCharacters = ["Shepard", "Liara", "Garrus", "Jack", "Wrex"];

function run99LinesOfCode(characters) {
  characters.forEach((character) => {
    console.log(`${character}:`);

    for (let i = 99; i > 0; i--) {
      console.log(
        `I'm Commander ${character} and this is my favorite song on the Citadel. Take number: ${i}`
      );
    }
  });
}

run99LinesOfCode(massEffectCharacters);
