let userConsent = confirm("Do you agree to share your personal information with this site? ");

if (userConsent) {
  console.log("Name: " + name);
  console.log("Height: " + feet + "’" + inch + "”");
  console.log("Weight: " + weightlbs.toFixed(3) + " lbs");

 
} else {
    console.log("User does not wish to share his/her information.");
    
}