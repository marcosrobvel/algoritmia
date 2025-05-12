function getNumberFromString(s) {
    const digits = s.replace(/\D/g, '');
    return digits ? parseInt(digits, 10) : 0;
  }

  console.log(getNumberFromString("hell5o wor6ld"));