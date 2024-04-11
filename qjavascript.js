var quotes = [
  'You assume too much',
  'This is getting out of hand. Now there are two of them!',
  'I knew it. They\'re here to force a settlement.',
  'Distract them. I will contact Lord Sidious.',
  'I thought the battle would take place far from here. This is too close.',
  'I would never do anything without the approval of the Senate.',
  'As you know, our blockade is perfectly legal, and we would be happy to receive the ambassadors.',
  'What? What did you say?',
  'Close the blast doors! That will hold them.',
  'Ah, victory. (pause, walk)',
  'It\'s Queen Amidala herself!',
  'But we must move quickly, to disrupt all communications down there.',
  'No need to report that to him, unless we have something to report.',
  'After her! This one\'s a decoy.'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
//13
