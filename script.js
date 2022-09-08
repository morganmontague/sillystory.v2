const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


const insertx = [
'Billy the Goblin',
'Big Mom',
'Elfo']

const inserty = [
'the big party',
'Dreamland',
'the Big House']

const insertz = [
'spontaneously combusted',
'personal demon Luci got you arrested',
'turned into a slug and crawled away']


const storyText = 'It was 94 farenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertxx weighs 300 pounds, and it was a hot day.';

randomize.addEventListener('click', result);

function result() {
  // adding new variables
  let newStory = storyText;
  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);
  
  // changing the story yo

  let newStory = newStory.replace('insertx', xItem);
  let newStory = newStory.replace('inserty', yItem);
  let newStory = newStory.replace('insertz', zItem);
  // added insertxx to the string to help replace both insertx instances
  let newStory = newStory.replace('insertxx', xItem);
  
  
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    // one stone = 14 lbs
    const weight = Math.round(300 / 14) + ' stone';
    newStory = newStory.replace('300 pounds', weight);
    
    // celsius = (F -32) / 1.8 also why centigrade and not celsius
    const temperature =  Math.round((94 -32) / 1.8) + ' centigrade';
    newStory = newStory.replace('94 farenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

