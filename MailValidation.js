// Validating Email pattern and then test it using a regular expression

// Function to accept the input for the email Id
function EmailIDValidator(emailID, choice)
{
    // Variable holding the regular expression for the email ID
    let EMAILID_REGEX;
    // Define the regular expression for email Id based on the use case
    switch (choice)
    {
        case 1: EMAILID_REGEX = RegExp('^[0-9A-Za-z]$'); break;
        case 2: EMAILID_REGEX = RegExp('^[0-9A-Za-z]+([+-_.](![@])[a-zA-Z]+)*$'); break;
        case 3: EMAILID_REGEX = RegExp('^[0-9A-Za-z]+([+-_.][a-zA-Z]+)*[@][0-9A-Za-z]+$'); break;
        case 4: EMAILID_REGEX = RegExp('^[0-9A-Za-z]+([+-_.][a-zA-Z]+)*[@][0-9A-Za-z]+[.][0-9A-Za-z]{2,3}$'); break;
        case 5: EMAILID_REGEX = RegExp('^[0-9A-Za-z]+([+-_.][a-zA-Z]+)*[@][0-9A-Za-z]+[.][0-9A-Za-z]{2,3}([.][A-Za-z]{2})$'); break;
        default: console.log('Invalid choice'); break;
    }
    // Testing for the emailID to be valid or not
    if(EMAILID_REGEX.test(emailID))
    {
        console.log(emailID + " is a valid email-ID for UC-"+choice);
        return true;
    }
    else
    {
        console.log(emailID + " is an invalid email-ID for UC-"+choice);
        // Returning false in case you want to validate data entry somewhere
        return false;
    }
}

console.log("----------Email Validation----------");

// UC5 --> Calling the method to validate the emailId's first part i.e. abc in abc.xyz@bridgelabz.co.in
let emailId1 = "Meghana22";
EmailIDValidator(emailId1, 1);
// UC6 --> Calling the method to validate the emailId's second part i.e. abc.xyz in abc.xyz@bridgelabz.co.in
let emailId2 = "Meghana@Dasari";
EmailIDValidator(emailId2, 2);
// UC7 --> Calling the method to validate the emailId's third part i.e. abc.xyz@bridgelabz in abc.xyz@bridgelabz.co.in
let emailId3 = "Meghana.Dasari@222";
EmailIDValidator(emailId3, 3);
// UC8 --> Calling the method to validate the emailId's optional parts or top level domains i.e. abc.xyz@bridgelabz.co/com in abc.xyz@bridgelabz.co.in
let emailId4 = "MeghanaDasari222@gmail";
EmailIDValidator(emailId4, 4);
// UC9 --> Calling the method to validate the emailId's country reference part i.e. abc.xyz@bridgelabz.co/com.in in abc.xyz@bridgelabz.co.in
let emailId5 = "meghana.dasari@222gmail.co.in";
EmailIDValidator(emailId5, 5);