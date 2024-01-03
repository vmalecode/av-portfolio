import movieReviewImg from '../images/movieReview.gif'
import chessImg from '../images/chess.gif'
import anagramsImg from '../images/anagrams.png'
import wordleImg from '../images/wordle.gif'
import mlImg from '../images/mla.gif'
export const movieReview = {
  name: 'Movie Reviews',
  affiliation: 'Northeastern University',
  bulletPoints: ['Fullstack project using MERN stack (Mongo, Express, React, Node)',
    'Utilizes OAuth bearer tokens for user sign in',
    'Incorporated protected routes to create, update, delete reviews',
    'Encrypted and salted passwords',
    'Front end runs on React & Redux',
    'Source availabile on request'],
  sourceLink: '',
  demoLink: '',
  img: movieReviewImg,
  imgStyle: 'imgLarge',
}
export const wordle = {
  name: 'Wordle Clone',
  affiliation: 'Northeastern University',
  bulletPoints: ['A clone of Wordle using React and Redux',
    'Used custom CSS to create mobile friendly UI',
    'Deployed on GCP Cloud Run',
    'Containerized using Docker'
  ],
  demoLink: 'https://wordle-clone-ibir6636ua-uc.a.run.app/instructions',
  sourceLink: 'https://github.com/vmalecode/aaron-vandermale-project2-wordle',
  img: wordleImg,
}
export const chess = {
  name: 'Chess',
  affiliation: 'The Odin Project Bootcamp',
  bulletPoints: ['Created a functional game of chess in the CLI',
    'Utilized object oriented design principles in Ruby'],
  demoLink: 'https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb',
  sourceLink: 'https://github.com/vmalecode/chess',
  img: chessImg,
  imgStyle: 'imgLarge'
}
export const anagrams = {
  name: 'Anagrams',
  affiliation: 'Northeastern University',
  bulletPoints: ['C program that finds all English anagrams',
    'Implemented using hash table and singly linked list',
    'Efficient returns all result in approximately 3 seconds',
    'No memory leaks'],
  demoLink: '',
  sourceLink: 'https://github.com/vmalecode/projects/blob/main/anagramsProject.md',
  img: anagramsImg,
  imgStyle: 'imgLarge',
  customStyle: { width: "400px" }
}
export const ml = {
  name: 'Machine Learning Classification',
  affiliation: 'Northeastern University',
  bulletPoints: ['ML project to classify fraudulent insurance claims from synthetic dataset',
    'Gradient Boosting Classifier built with Python/sklearn',
    'High f-1 score',
    'Model performance and data visualization available in report'],
  demoLink: 'https://ml-proj-ibir6636ua-uc.a.run.app/',
  sourceLink: 'https://github.com/vmalecode/insurance_ml_project/blob/main/report.pdf',
  img: mlImg,
  imgStyle: 'imgLarge',
  customStyle: { width: "400px" }
}

export const projectsList = [
  wordle, ml, movieReview, chess, anagrams
]