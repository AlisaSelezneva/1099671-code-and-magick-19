'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_COUNT = 4;

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomNumber = function () {
  return Math.floor(Math.random() * 2);
};

var getRandomIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

var getRandomElement = function (array) {
  return array[getRandomIndex(array)];
};

var mixNameAndSurname = function (names, surnames) {
  var name = getRandomElement(names);
  var surname = getRandomElement(surnames);

  return getRandomNumber() ? name + ' ' + surname : surname + ' ' + name;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizardsArray = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    wizards.push(
        {
          name: mixNameAndSurname(WIZARD_NAMES, WIZARD_SURNAMES),
          coatColor: getRandomElement(WIZARD_COAT),
          eyesColor: getRandomElement(WIZARD_EYES)
        }
    );
  }
  return wizards;
};

var createWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(createWizards(createWizardsArray()));

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');
