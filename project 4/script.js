     async function fetchData(){
        try{
              const response = await fetch ("https://jsonplaceholder.typicode.com/users")
              const data = await response.json();
        
        const cardContainer = document.getElementById("cardContainer");

        data.forEach(user => {
          const card = document.createElement("div");
                   card.classList.add("col-md-4","mb-4");

             const cardBody = document.createElement("div");
          cardBody.classList.add("card", "text-black","shadow");

          const name = document.createElement("h5");
               name.innerText = "Name: " + user.name;

          const email = document.createElement("p");
               email.innerText = "Email: " + user.email;

          const street = document.createElement("p");
               street.innerText = "Street: " + user.address.street;

        const city = document.createElement("p");
          city.innerText = "City: " + user.address.city;

            cardBody.appendChild(name);
           cardBody.appendChild(email);
          cardBody.appendChild(street);
          cardBody.appendChild(city);

          card.appendChild(cardBody);

          cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error("error fetching data", error);
    }
    }
    fetchData();