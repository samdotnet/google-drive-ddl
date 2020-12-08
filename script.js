/*
  I'm sorry. I probably over commented this file but I can never find a happy medium. It's either not commented at all or commented too much.
  
  The basic format of a Google Drive sharing link is: 
  https://drive.google.com/file/d/link-id/view/?usp=sharing
  The basic format of the Google drive download link is:
  https://drive.google.com/uc?export=download&id=link-id
  
  With some simple string manipulation, one can isolate the link id and just add it onto the download link. It's really quite simple but instead of just doing that everytime I wanted to make a Google Drive DDL, I had to complicate things and make a website.
*/

//This function converts the link (duh)
function convertLink() {
  //Gets the link from the input
  var driveLink = document.getElementById("linkSubmit").value;
  //Slices off the first part of the link
  var itemId = driveLink.slice(32);
  //Finds where the "/" is indicating the end of the item id
  var cutoff = itemId.indexOf("/");
  //Finalizes the item id, cutting off the "/view/?usp=sharing"
  var itemId = itemId.substr(0, cutoff);
  //Adds on the download link part thing I don't know.
  var ddlFinal = "https://drive.google.com/uc?export=download&id=" + itemId;
  //Logs it in the console if the output thing refuses to do it's job.
  console.log(ddlFinal);
  document.getElementById("result").value = ddlFinal;
}

//Function to copy the result.
function copyLink() {
  const input = document.getElementById("result");
  //Focus on the result field
  input.focus();
  //Selects the stuff in the result field
  input.select();
  //Copies whatever is selected
  document.execCommand("copy");
}
