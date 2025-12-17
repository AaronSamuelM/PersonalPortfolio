export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function splitTextByWord(text) {
  return text.split(" ").map((word, index) => ({
    word,
    key: index,
  }));
}

export function splitTextByCharacter(text) {
  return text.split("").map((char, index) => ({
    char,
    key: index,
  }));
}