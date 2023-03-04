const firebaseConfig = {
    apiKey: "AIzaSyCO1ygxexCgx5yLuctifMOXZWxtCGn3vuc",
    authDomain: "nice-6d3b3.firebaseapp.com",
    projectId: "nice-6d3b3",
    storageBucket: "nice-6d3b3.appspot.com",
    messagingSenderId: "814570297611",
    appId: "1:814570297611:web:50dda0fb99d16a045aea0e"
  };
firebase.initializeApp(firebaseConfig);


 let fileText = document.querySelector(".fileText");
//  let uploadPercentage = document.querySelector(".uploadPercentage");
// let progress =  document.querySelector(".progress");
let percentVal;
let fileItem;
let fileName;
let img = document.querySelector(".img");
 function getFile(e){
console.log(e.target.files[0]);

    fileItem = e.target.files[0];
    fileName = fileItem.name;
}


function uploadImage(){

    let storageRef = firebase.storage().ref("images/"+fileName);
    let uploadTask = storageRef.put(fileItem);

    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);
        percentVal = Math.floor((snapshot.bytesTransferred/snapshot.totalBytes)*100);
        console.log(percentVal);
        // uploadPercentage.innerHTML = percentVal+"%";
        // progress.style.width=percentVal+"%";
    },(error)=>{
        console.log("Error is ", error);
    },()=>{

        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL", url);

            if(url != ""){
                // img.setAttribute("src",url);
                // img.style.display="block";
            }


        })


    })
    
    
}