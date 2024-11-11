export class Main {
  simpleMinutesLine(minutes) {
    const onLamps = minutes % 5; // Get remainder when divided by 5
    return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
  }

  fiveMinutesLine(minutes) {
    if (minutes === 0) return "OOOOOOOOOOO";

    if (minutes === 5) return "YOOOOOOOOOO";

    if (minutes === 30) return "YYRYYROOOOO";

    if (minutes === 55) return "YYRYYRYYRYY";
    
    return "OOOOOOOOOOO";
  }
  
}
