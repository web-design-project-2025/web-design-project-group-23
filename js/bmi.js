document
  .getElementById("save-stats-btn")
  .addEventListener("click", async function () {
    const height = document.getElementById("height").value.trim();
    const weight = document.getElementById("weight").value.trim();

    if (!height || !weight) {
      alert("Please enter both height and weight.");
      return;
    }

    if (isNaN(height) || isNaN(weight)) {
      alert("Please enter numbers for only weight and height.");
      return;
    }

    const heightInches = parseFloat(height) / 2.54;

    const apiUrl = `https://smart-body-mass-index-calculator-bmi.p.rapidapi.com/api/BMI/imperial?lbs=${weight}&inches=${heightInches}`;

    const headers = {
      "x-rapidapi-key": "c415c2aa14msh9ba9c4364bc644fp11e9e5jsn3bfad2ace3d1",
      "x-rapidapi-host": "smart-body-mass-index-calculator-bmi.p.rapidapi.com",
    };

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: headers,
      });

      const text = await response.text();
      console.log("RAW API response:", text);

      const data = JSON.parse(text);
      console.log("Parsed JSON:", data);

      if (data.bmi && data.bmiCategoryForAdults?.category) {
        document.getElementById(
          "bmi-result"
        ).textContent = `Your BMI is ${data.bmi.toFixed(
          2
        )}, which means you're considered: ${
          data.bmiCategoryForAdults.category
        }`;
      } else {
        document.getElementById("bmi-result").textContent =
          "Could not calculate BMI. Please check your input or try again later.";
      }
    } catch (error) {
      console.error("API error:", error);
      alert("Something went wrong while calculating your BMI.");
    }
  });
