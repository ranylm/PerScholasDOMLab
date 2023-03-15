let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
(function (){
  document.querySelector('#main-title').textContent="Short Title";
  document.querySelector('body').style.backgroundColor="lime";
  document.querySelector('#favorite-things').removeChild(
    document.querySelector('#favorite-things > li:last-child')
  )
})
();

  // Part 2
  (function (){
    document.querySelector('body').style.backgroundColor="lime";
  })
  ();

  // Part 3
  (function (){
    document.querySelector('#favorite-things').removeChild(
      document.querySelector('#favorite-things > li:last-child')
    );
  })
  ();

  // Part 4
  (function (){
    document.querySelectorAll('.special-title').forEach((element)=>{
      element.style.fontSize = '2rem';
    })
  })
  ();

  // Part 5
  (function (){
    const pastRace = document.querySelector('#past-races');
    document.querySelectorAll('#past-races > li').forEach((element)=>{
      if(element.innerText === 'Chicago') pastRace.removeChild(element);
    });
    })
  ();

  // Part 6
  (function (){
    const pastRace = document.querySelector('#past-races');
    const newLi = document.createElement('li');
    newLi.innerText='New York';
    pastRace.appendChild(newLi);
  })
  ();

  // Part 7
  (function (){
    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-post');
    const newH1 = document.createElement('h1');
    newH1.innerText = 'New York';
    const newP = document.createElement('p');
    newP.innerText= 'I GOT STUCK IN TRAFFIC!'
    newBlogPost.appendChild(newH1);
    newBlogPost.appendChild(newP);
    document.querySelector('.main').appendChild(newBlogPost);
  })
  ();

  // Part 8
  (function (){
    document.querySelector('#quote-title').addEventListener('click',randomQuote);

  })
  ();

  // Part 9
  (function (){
    document.querySelectorAll('.blog-post').forEach((element)=>{
      //fire on child element
      element.addEventListener('mouseenter',(e)=>{
        //console.log('blog-post enter')
        element.className='blog-post red'
        //element.classList.toggle('red');
        //element.classList.toggle('purple');
      });
      element.addEventListener('mouseleave',(e)=>{
        //console.log('blog-post leave')
        element.className='blog-post purple'
        //element.classList.toggle('red');
        //element.classList.toggle('purple');
      });
    })
  })
  ();



});
