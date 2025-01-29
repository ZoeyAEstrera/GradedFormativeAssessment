    let name = "zoey";
    let heightinch = 68;
    let weightkg = 55;

    let feet = Math.floor(heightinch / 12);
    let inch = heightinch % 12;

    let weightlbs = weightkg * 2.20462;

    let alertMessage = 
      "Name: " + name + "\n" +
      "Height: " + feet + "’" + inch + "”\n" +
      "Weight: " + weightlbs.toFixed(3) + " lbs";

    alert(alertMessage);