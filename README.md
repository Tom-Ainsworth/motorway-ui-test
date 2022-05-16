
# Motorway UI Test

Welcome to the Motorway UI technical test. This test focuses on user experience, and your skills with HTML, CSS, a11y and leveraging browser APIs.

## My Notes

App tested in Chrome Version 101.0.4951.64 (Official Build) so please use this when reviewing if possible.
I wanted to make use of some of the data in images.json and so opted for a card style page. The avengers images seemed like profile pictures, therefore I wanted to link a profile with their car
I added the bio in as well as the names so they load dynamically, however I couldn't manage to get the correct cars to load for each profile. Currently the "See users car" button loads a modal of the final
index's car. Were I to expand on this idea, I would load the cars based on their IDs or index values.

To aid A11y I added the alt tags via the json data for each index, for both profile and car images (cars aren't dynamic yet though due to the above)

The modal for the car features an ease-in-out transition from the top, with the ability to exit the modal by clicking away from it, rather than just clicking the close button.

The form is quite basic, but includes everything suggested in the brief. I looked through the Motorway site to try and match some of the colours and style of the form as a whole, things like the placeholders and fonts.

Media queries are in place for all components, and would definitely be improved with more time available, as it isn't as responsive as I'd like it to be on smaller screens.

Overall the challenge was really fun! I learned a lot about React and picked up some good css tips from the examples given below. I look forward to hearing from you!
Tom
## Set up

This repo is a slightly modified Create React App and an Express server which serves a JSON feed of images.

- Clone the repo and run `npm install`

- `npm run serve` will run the server

- in another terminal window `npm run start` will start CRA

After this, CRA will open a tab with the app running, usually `localhost:3000`. If you look in `src/App.js` you'll see the API call to the server is already made and will console log out the results.

#### Note

- The server and CRA are watching the relevant files and will hot reload if any changes are made.

- Feel free to modify or install whatever code you feel is necessary. If installing packages which are wrappers for native browsers APIs please leave a comment explaining why.


## Tasks

### 1. UI development

Create a responsive UI to display the images returned by the API.

The aim is to demonstrate your experience and knowledge of HTML, CSS, JS and React features; and demonstrate creative thinking in how images can be presented and manipulated.

Images aren't optimised and their dimensions are varied, there are .jpg and .webp versions on s3, so you will need to take this into account.

#### Inspiration:

https://twitter.com/andybarefoot/status/1251844621262602242

http://www.artist-developer.com/

#### Some ideas to get you started:

Resizable thumbnails

Modal to review full size images

Image effects or filters


### 2. Performance

The API that is returning images is rather slow. Show how it can be sped up, and show how you would measure the improvement in performance.


### 3. Forms

One of the oldest yet trickiest parts of web development is forms, so we’d like to see how you handle them.

Add a form to your app with the following fields. The form doesn't need to submit to anywhere, but must validate on the client.

- [ ] Name
- [ ] Email
- [ ] Date of birth
- [ ] Favourite colour
- [ ] Salary (using a range input)


## Time allowed

We appreciate that your time is valuable and recommend you not spend more than 2 hours on these tasks.


## Notes

The goal of the test is to prove your understanding of the concepts of modern HTML/CSS/JS, but not to produce something production ready or pixel perfect.
Your work will be tested in the browser of your choice, so please specify this when submitting. This can include pre-release browsers such as Chrome Canary or Safari Technology Preview if you want to work with experimental features.
