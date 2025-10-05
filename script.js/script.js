body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header {
  background: #333;
  color: #fff;
  padding: 1rem;
}

header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

header nav a {
  color: #fff;
  text-decoration: none;
}

#hero {
  background: url("your-photo.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 5rem 1rem;
}

section {
  padding: 2rem;
}

.project-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Μπράβο! Πατήσατε το κουμπί!");
});
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Μάθε περισσότερα για την εταιρεία μας!");
});
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Μάθε περισσότερα για την εταιρεία μας!");
});

