/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from "qr-image"
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
    type:"input",
    message: "Type in your URL: ",
    name: "URL",  
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL

    //made the qrcode and save
    var qr_svg = qr.image(url, { type: "png"});
    qr_svg.pipe(fs.createWriteStream('qrcode.png'));

    //save the url at url.txt
    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved")
    })
    })

   .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something went wrong:", error);
    }
    });