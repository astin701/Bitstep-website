document.getElementById("contactForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const contact = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        phone: document.getElementById("phone").value,

        message: document.getElementById("message").value

    };

    try{

        const response = await fetch("http://localhost:8080/api/contact",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(contact)

        });

        const result = await response.text();

        alert(result);

        document.getElementById("contactForm").reset();

    }catch(error){

        alert("Unable to send message.");

        console.error(error);

    }

});