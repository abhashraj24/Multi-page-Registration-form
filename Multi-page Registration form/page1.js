var patten=/\s/g;
var alert= document.getElementById('alert-caps');
function white(data){
    var isSpace=patten.test(data);
    if(isSpace){
        alert.innerText="Space is not allow";
    }
    else{
        alert.innerText="";
    }
}

function validation(){
    var form=document.getElementById("form");
    var email=document.getElementById("email").value;
    var text=document.getElementById("text");

    var patterns= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(email.match(patterns)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML="valid"
    text.style.color="#000000";
}
else{
    form.classList.remove("valid")
    form.classList.add("invalid");
    text.innerHTML="Invalid";
    text.style.color="#ff0000";
}
if(email==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML="";
    text.style.color="000000";
}
}

function phonenum(){
    var form=document.getElementById("form");
    var number=document.getElementById("number").value;
    var texts=document.getElementById("texts");

    var patt=/^\d{10}$/;

    if(number.match(patt)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    texts.innerHTML="valid"
    texts.style.color="#000000";
}
else{
    form.classList.remove("valid")
    form.classList.add("invalid");
    texts.innerHTML="Invalid";
    texts.style.color="#ff0000";
}
if(number==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    texts.innerHTML="";
    texts.style.color="000000";
}


}
function phonenumber(){
    var form=document.getElementById("form");
    var numbers=document.getElementById("numbers").value;
    var para=document.getElementById("para");

    var patt=/^\d{10}$/;

    if(numbers.match(patt)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    para.innerHTML="valid"
    para.style.color="#000000";
}
else{
    form.classList.remove("valid")
    form.classList.add("invalid");
    para.innerHTML="Invalid";
    para.style.color="#ff0000";
}
if(numbers==""){
    form.classList.remove("valid");
    form.classList.remove("invalid");
    para.innerHTML="";
    para.style.color="000000";
}
}


let saveFile= () => {
    const first_name=document.getElementById("firstName");
    const last_name=document.getElementById("lastName");
    const date_of_birth=document.getElementById("date_fo_birth");
    const email=document.getElementById("email");
    const father_first_name=document.getElementById("fFirstName");
    const father_last_name=document.getElementById("fLastName");
    const mother_first_name=document.getElementById("mFirstName");
    const mother_last_name=document.getElementById("mLastName");
    const gender=document.getElementById("gender");
    const nationality=document.getElementById("it_nationality");
    const address=document.getElementById("add");
    const city=document.getElementById("city");
    const country=document.getElementById("it_country");
    const tphone=document.getElementById("number");
    const mphone=document.getElementById("numbers");

   

    let data="\r First_name: "+first_name.value +"\r\n" +"Last_name: "+last_name.value +"\r\n"+"Date_of_Birth: "+date_of_birth.value+"\r\n"+"Email: "+email.value+"\r\n"+"Father_First_Name: "+father_first_name.value+"\r\n"+"Father_Last_Name: "+father_last_name.value+"\r\n"+"Mother_First_Name: "+mother_first_name.value+"\r\n"+"Mother_Last_Name: "+mother_last_name.value+"\r\n"+"Gender: "+gender.value+"\r\n"+"Nationality: "+nationality.value+"\r\n"+"Address: "+address.value+"\r\n"+"City: "+city.value+"\r\n"+"Country: "+country.value+"\r\n"+"Telephone_Home: "+tphone.value+"\r\n"+"Telephone_Mobile: "+mphone.value;

    //  temp_gender.checked? gender="M" : gender="F";

    console.log(data);

    const textToBLOB=new Blob([data], {type:"text/plain"});
    var filename=new Date();
    var month=new Date();
    month=month.getMonth();

    var day=new Date();
    var day=day.getUTCDate();

    var year=new Date();
    var year=year.getUTCFullYear();

    newdate = year+"/" +month+"/"+day;
    const sFileName=filename;

    let newLink=document.createElement("a");
    newLink.download=new Date();

    if(window.webkitURL !=null){
        newLink.href=window.webkitURL.createObjectURL(textToBLOB);
    }
    else{
        newLink.href=window.URL.createObjectURL(textToBLOB);
        newLink.style.display="none";
        document.body.appendChild(newLink);
    }
    newLink.click();
};
    