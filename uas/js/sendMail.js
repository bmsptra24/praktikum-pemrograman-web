const form = document.getElementById('contributeForm')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const animalName = document.getElementById('animal_name').value
  const animalDescription = document.getElementById('animal_description').value
  const animalHabitat = document.getElementById('animal_habitat').value
  const animalType = document.querySelector('input[name="animal_type"]:checked')
    .value

  const emailBody = `
    Animal Name: ${animalName}%0D%0A
    Description: ${animalDescription}%0D%0A
    Habitat: ${animalHabitat}%0D%0A
    Type: ${animalType}`

  const mailtoLink = `mailto:?subject=New Animal Contribution&body=${emailBody}`

  window.location.href = mailtoLink
})
