function sendMail(){

    var params={

        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value
    };


const serviecID="service_8ybyham";
const templateID="template_z4dc1by";

if(params.name === "" || params.email === "" || params.message === ""){
    alert("please fill out all fields")
    return;
}
    



emailjs.send(serviecID,templateID,params)
.then(
    (res)=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully")
    }
)
.catch((err) => console.log(err));
};