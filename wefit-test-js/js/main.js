const menuGroup = document.querySelector('.btn-group-vertical');

menuGroup.classList.remove('btn-group-vertical');

const headerContainer = document.querySelector('.jumbotron');
const buttonHeader = document.querySelector('.jumbotron > .btn');
const paragraphContainer = headerContainer.querySelector('p:nth-child(4)');

headerContainer.style.backgroundColor = '#6c757d';
headerContainer.style.color = '#fff';
headerContainer.classList.add('text-right');

paragraphContainer.classList.add('font-weight-bold')

buttonHeader.classList.replace('btn-primary', 'btn-success');

const sections = document.querySelectorAll('.container > .row');
const cards = document.querySelectorAll('.col-lg-3');

const cardSection = sections[2];

const natureCard = cards[3];
const animalsCard = cards[0];
const peopleCard = cards[2];
const technologyCard = cards[1];

animalsCard.querySelector('.btn').classList.replace('btn-primary', 'btn-success');

cardSection.innerHTML = `
<div div class="col-lg-12" >
  <h3 class="display-6">Cards</h3>
</div >
`;

cardSection.appendChild(natureCard);
cardSection.appendChild(animalsCard);
cardSection.appendChild(peopleCard);
cardSection.appendChild(technologyCard);

const listGroup = document.querySelector('ul.list-group');
const listGroupItem = listGroup.querySelectorAll('.list-group-item');

listGroupItem.forEach((item) => {
  item.classList.remove('active');
});

function createNewListGroupItem(title, isActive) {
  const li = document.createElement('li');
  li.className = `list-group-item ${isActive ? 'active' : ''}`;
  li.textContent = title;

  return li;
}

const fourthItem = createNewListGroupItem('Quarto item', true);
const fifthItem = createNewListGroupItem('Quinto item', false);

listGroup.appendChild(fourthItem);
listGroup.appendChild(fifthItem);
