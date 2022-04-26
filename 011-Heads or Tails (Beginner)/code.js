const headOrTails = () => {
  let result = Math.floor(Math.random() * 2);
  if (result === 0) {
    console.log("🧶Tails");
  } else if (result === 1) {
    console.log("👑Heads");
  }
};

headOrTails();
headOrTails();
headOrTails();
headOrTails();
