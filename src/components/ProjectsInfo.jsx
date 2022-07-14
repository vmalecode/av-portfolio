import movieReviewImg from '../images/movieReview.gif'
import chessImg from '../images/chess.gif'
import anagramsImg from '../images/anagrams.png'
import wordleImg from '../images/wordle.gif'

export const movieReview = {
  name : 'Movie Reviews',
  date :'May, 2022',
  affiliation: 'Northeastern University',
  bulletPoints: ['Fullstack project using MERN stack (Mongo, Express, React, Node)',
                'Utilizes OAuth bearer tokens for user sign in',
                'Protected routes to updated, delete reviews',
                'Encrypted and salted passwords',
                'Front end runs on React & Redux',
                'Source availabile on request'],
  sourceLink:'',
  demoLink: 'https://avmoviereview.herokuapp.com/',
  img: movieReviewImg,
  imgStyle: 'imgLarge',
}
export const wordle = {
  name : 'Wordle Clone',
  date: 'March, 2022',
  affiliation: 'Northeastern University',
  bulletPoints: ['A clone of Wordle using React and Redux',
                'Used custom CSS to create mobile friendly UI',
                'Protected routes to updated, delete reviews',
                'Front end runs on React & Redux'],
  demoLink: 'https://av-wordle.herokuapp.com/',
  sourceLink: 'https://github.com/vmalecode/aaron-vandermale-project2-wordle',
  img: wordleImg,
}
export const chess = {
  name : 'Chess',
  date: 'January, 2021',
  affiliation: 'The Odin Project Bootcamp',
  bulletPoints: ['Created a functional game of chess in the CLI',
                'Utilized object oriented design principles in Ruby'],
  demoLink: 'https://replit.com/@vmalecode/Ruby-Chess-REPL#main.rb',
  sourceLink: 'https://github.com/vmalecode/chess',
  img: chessImg,
  imgStyle: 'imgLarge'
}
export const anagrams = {
  name : 'Anagrams',
  date: 'August, 2021',
  affiliation: 'Northeastern University',
  bulletPoints: ['C program that finds all English anagrams',
                'Implemented using hash table and singly linked list',
                'Efficient returns all result in approximately 3 seconds',
                'No memory leaks'],
  demoLink: '',
  sourceLink: 'https://github.com/vmalecode/projects/blob/main/anagramsProject.md',
  img: anagramsImg,
  imgStyle: 'imgLarge',
  customStyle: {width:"400px"}
}
export const projectsList = [
  wordle,movieReview,chess,anagrams
]