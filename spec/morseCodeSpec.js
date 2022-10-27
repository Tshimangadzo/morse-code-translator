const morsecode = require("../src/morsecode");

describe("Letters to morsecode function", () => {
  it("Should convert letters to morse code", () => {
    const letters = "hello, world";
    const morseCode = ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..";
    expect(morsecode.lettersToMorseCode(letters)).toBe(morseCode);
  });

  it("Should throw error for invalid letters", () => {
    const letters = "helloß Ø world";
    expect(() => morsecode.lettersToMorseCode(letters)).toThrow(
      "Letters contains 'ß Ø' character(s).",
    );
  });
});

describe("Morse code to letters function", () => {
  it("Should convert morse code to letters", () => {
    expect(
      morsecode.morseCodeToLetters(
        ".... . .-.. .-.. --- --..-- / .-- --- .-. .-.. -..",
      ),
    ).toBe("hello, world");
  });

  it("Should throw error for invalid morse code", () => {
    const morse = ".... . .-..a .-.. --- !--..-- / .-- --- .-. Z.-.. -..";
    expect(() => morsecode.morseCodeToLetters(morse)).toThrow(
      "Morse code contains 'a ! Z' character(s).",
    );
  });
});

describe("Is same number of character function", () => {
  const input = "true number of character";
  it("Should return true for same number of character", () => {
    const output =
      "- .-. ..- . / -. ..- -- -... . .-. / --- ..-. / -.-. .... .- .-. .- -.-. - . .-.";
    expect(morsecode.isSameNumberOfCharacter(input, output)).toBe(true);
  });

  it("Should return false for different number of character", () => {
    const output =
      "- .-. ..- . / -. ..- -- -... . .-. / --- ..-. ";
    expect(morsecode.isSameNumberOfCharacter(input, output)).toBe(false);
  });
   
  
  beforeEach(function(){
    spyOn(console, 'assert');
  })
  
  it("Should console assert for different number of character", () => {
    const output =
      "- .-. ..- . / -. ..- -- -... . .-. / --- ..-. / -.-. .... .- .-.";
      morsecode.isSameNumberOfCharacter(input, output);
    expect(console.assert).toHaveBeenCalled();
  });
});

describe("Is right number of spaces function", () => {
  const input = "true number of spaces";
  it("Should return true for equal number of spaces", () => {
    const output =
      "- .-. ..- . / -. ..- -- -... . .-. / --- ..-. / ... .--. .- -.-. . ...";
    expect(morsecode.isRightNumberOfSpaces(input, output)).toBe(true);
  });

  it("Should return false for different number of spaces", () => {
    const output =
      "- .-. ..- . -. ..- -- -... . .-. --- ..-. / ... .--. .- -.-. . ...";
    expect(morsecode.isRightNumberOfSpaces(input, output)).toBe(false);
  });
  
  beforeEach(function(){
    spyOn(console, 'assert');
  })
  
  it("Should console assert for different number of spaces", () => {
    const output =
      "- .-. ..- . / -. ..- -- -... . .-. --- ..-.  ... .--. .- -.-. . ...";
      morsecode.isRightNumberOfSpaces(input, output)
    expect(console.assert).toHaveBeenCalled();
  });
});

describe("Is valid letters function", () => {
  it("Should return true if letters are valid", () => {
    expect(morsecode.isValidLetters("Some letter").isValid).toBe(true);
  });

  it("Should return false if letters are invalid", () => {
    expect(morsecode.isValidLetters("SomeßØ letter").isValid).toBe(false);
  });
});

describe("Is valid morse code fucntion", () => {
  it("Should return true if morse code is valid", () => {
    expect(morsecode.isValidMorseCode(".. / --.").isValid).toBe(true);
  });
  it("Should return false if morse code is invalid", () => {
    expect(morsecode.isValidMorseCode(".. a / h--.").isValid).toBe(false);
  });
});
