export class Main {
    
    simpleMinutesLine(minutes) {
        const onLamps = minutes % 5;  // Get remainder when divided by 5
        return "Y".repeat(onLamps) + "O".repeat(4 - onLamps);
    }

    fiveMinutesLine(minutes) {
       
        return "OOOOOOOOOOO";
      }
}