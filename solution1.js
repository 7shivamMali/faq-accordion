function toggleContent(questionElement) {

    const contentElement = questionElement.nextElementSibling;

    contentElement.classList.toggle('open');

    const plusElement = questionElement.children[1]
    const minusElement = questionElement.children[2]

    if (contentElement.classList.contains('open')) {
      plusElement.style.display = 'none'
      minusElement.style.display = 'inline'
    } else {
      plusElement.style.display = 'inline'
      minusElement.style.display = 'none'
    }
  }