// Select the button and the color box
const button = document.getElementById("changeColorBtn");
const box = document.getElementById("colorBox");

// List of colors
const colors = ["#ff9999", "#66ccff", "#99ff99", "#ffcc66", "#cc99ff", "#ffb6c1"];

// Add click event listener
button.addEventListener("click", () => {
  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Apply it to the box background
  box.style.backgroundColor = randomColor;
});

document.getElementById("loadRecipeBtn").addEventListener("click", function () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            if (!data.meals || data.meals.length === 0) {
                throw new Error('No data received');
            }
            const meal = data.meals[0];
            document.getElementById("recipeResult").innerHTML =
                `<h4>${meal.strMeal}</h4>
                <img src="${meal.strMealThumb}" alt="Meal Image" style="max-width:200px;">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0,200)}...</p>`;
        })
        .catch((error) => {
            document.getElementById("recipeResult").innerText = "Could not load recipe: " + error.message;
            console.log(error); // log errors for debugging
        });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let valid = true;
            let name = document.getElementById("name");
            let email = document.getElementById("email");
            let result = document.getElementById("formResult");
            name.classList.remove("is-invalid");
            email.classList.remove("is-invalid");

            if (name.value.trim() === "") {
                name.classList.add("is-invalid");
                valid = false;
            }
            if (!email.value.match(/^.+@.+\..+$/)) {
                email.classList.add("is-invalid");
                valid = false;
            }

            if (valid) {
                result.innerHTML = "<p style='color:green'>Thank you for contacting us!</p>";
            } else {
                result.innerHTML = "";
            }
        });
document.getElementById("loadRecipeBtn").addEventListener("click", function () {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            if (!data.meals || data.meals.length === 0) {
                throw new Error('No data received');
            }
            const meal = data.meals[0];
            document.getElementById("recipeResult").innerHTML =
                `<h4>${meal.strMeal}</h4>
                <img src="${meal.strMealThumb}" alt="Meal Image" style="max-width:200px;">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Area:</strong> ${meal.strArea}</p>
                <p><strong>Instructions:</strong> ${meal.strInstructions.substring(0,200)}...</p>`;
        })
        .catch((error) => {
            document.getElementById("recipeResult").innerText = "Could not load recipe: " + error.message;
            console.error(error); // Look in DevTools for details!
        });
});

