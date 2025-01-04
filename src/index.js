document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          imgElement.alt = 'Dog Image';
          imgElement.style.width = '200px'; // Adjust the size if needed
          imageContainer.appendChild(imgElement);
        });
      });
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.getElementById('dog-breeds');
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          li.style.cursor = 'pointer';
          li.addEventListener('click', () => {
            li.style.color = 'red'; // a colour after being clicked
          });
          breedList.appendChild(li);
        });
  
        const breedDropdown = document.getElementById('breed-dropdown');
        breedDropdown.addEventListener('change', (event) => {
          const selectedLetter = event.target.value;
          breedList.innerHTML = ''; // Clear the list
          breeds.filter(breed => breed.startsWith(selectedLetter))
                .forEach(filteredBreed => {
                  const li = document.createElement('li');
                  li.textContent = filteredBreed;
                  li.style.cursor = 'pointer';
                  li.addEventListener('click', () => {
                    li.style.color = 'red';
                  });
                  breedList.appendChild(li);
                });
        });
      });
  });
  