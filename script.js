const card = document.querySelectorAll('.card')
const card_header = document.querySelectorAll('.card_header')
const btn_expand = document.querySelectorAll('.card_header_btn_expand')
const btn_collapse = document.querySelectorAll('.card_header_btn_collapse')
const card_body = document.querySelectorAll('.card_body')


card.forEach(card => {
  card.querySelectorAll('.card_header_btn_expand').forEach(btn => {
    btn.addEventListener('click', () => {
      const btnExp = card.childNodes[1].childNodes[3]
      const btnCol = card.childNodes[1].childNodes[5]
      const cbody = card.childNodes[3]
      cbody.classList.remove('none')
      btnCol.classList.remove('none')
      btnExp.classList.add('none')
    })
  })

  card.querySelectorAll('.card_header_btn_collapse').forEach(btn => {
    btn.addEventListener('click', () => {
      const btnExp = card.childNodes[1].childNodes[3]
      const btnCol = card.childNodes[1].childNodes[5]
      const cbody = card.childNodes[3]
      cbody.classList.add('none')
      btnCol.classList.add('none')
      btnExp.classList.remove('none')
    })
  })
})


// ---------------------------------------------------------------------------------------------------
/* (A.I) GPT SOLUTION


function toggleCard(card) {
  const btnExp = card.querySelector('.card_header_btn_expand');
  const btnCol = card.querySelector('.card_header_btn_collapse');
  const cardBody = card.querySelector('.card_body');

  btnExp.classList.toggle('none');
  btnCol.classList.toggle('none');
  cardBody.classList.toggle('none');
}

// Event delegation for card buttons
document.getElementById('container').addEventListener('click', function (event) {
  if (event.target.classList.contains('card_header_btn_expand')) {
    toggleCard(event.target.closest('.card'));
  } else if (event.target.classList.contains('card_header_btn_collapse')) {
    toggleCard(event.target.closest('.card'));
  }
});

// Add new card
document.getElementById('addCard').addEventListener('click', function () {
  const container = document.getElementById('container');
  const cardTemplate = document.querySelector('.card');
  const newCard = cardTemplate.cloneNode(true);
  container.appendChild(newCard);
});
*/




// ---------------------------------------------------------------------------------------------------
/* (SENIOR) Web Dev Simplified SOLUTION: 

document.addEventListener('click', e => {
  if (!e.target.matches('.card_header_btn_expand')) return

  const card = e.target.closest('.card')
  const cardBody = card.querySelector('.card_body')

  cardBody.classList.toggle('none')
  // e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand'   ; i used 2 buttons
})
*/
