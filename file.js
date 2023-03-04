const firebaseConfig = {
    apiKey: "AIzaSyCrzxj2VPeV3jhR92slm5JIrtpTXStQwrU",
    authDomain: "test-purpose-d8b53.firebaseapp.com",
    projectId: "test-purpose-d8b53",
    storageBucket: "test-purpose-d8b53.appspot.com",
    messagingSenderId: "532038197276",
    appId: "1:532038197276:web:402ff043f522a6343c7fd9"
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