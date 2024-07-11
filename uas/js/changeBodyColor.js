document.addEventListener('DOMContentLoaded', function () {
  const carouselCells = document.querySelectorAll('.carousel-cell')

  carouselCells.forEach((cell, index) => {
    cell.addEventListener('mouseover', function () {
      // Remove any previously set color classes from body
      document.body.classList.remove(
        'body-color-1',
        'body-color-2',
        'body-color-3',
        'body-color-4',
        'body-color-5',
      )
      // Add corresponding color class to body based on index
      document.body.classList.add(`body-color-${index + 1}`)
    })
  })
})
