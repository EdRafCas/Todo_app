# Repository started on 02/06/2023 as practice for a css processor integration (SASS) with React.

# Finished on 03/09/2023 After achieving a sufficient lookalike functionality to the frontendmentor reference as seen in: (https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [uuid](https://www.npmjs.com/package/uuid) - For easy asignation of unique id's, not really needed but made it simple to focus on the looks
- [sass](https://create-react-app.dev/docs/adding-a-sass-stylesheet/) - The main reason for picking up this challenge  was to focus on SASS integrations with React, night-mode/day-mode styles are, depending on the way you approach it, heavily depending on the class asigned to components, SASS with his easy approachable-easy reachable classes allowed to create and separate the styles for each mode without too much coding.

### What I learned

When different styles for different states of components  are required(day/night, completed/incompleted) the easiest way to approach it is to create variables that hold the value of classes, and connect this to the USESTATE functionality that React offers, as exaple:


To see how you can add code snippets, see below:



```js
const [mutableList, changeMutableList] = useState(item)
const classes = mutableList.completed ? "input-container-list itemlist completed" :"input-container-list itemlist ";
const checkIcon = mutableList.completed? (
            <img src={IconCheck2} alt={"Completed"}/>
      ) : ("");
```
```js
<li className={classes} >
      <div className='checkbox-container'>
            <div className='circle-container'  onClick={handleComplete} >
                  <span className='checkbox'>{checkIcon}</span>  
            </div>
      </div>
      <div className={classesTask}>
            <span>{item.actitivyNote}</span>       
      </div>

</li>
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**This Writing principle is extended to the entirety of the project, variables with values tied to states values, as the states go from day/night complete/incomplete the classes change from one to the other and the night/day complete/incomplete mode unfolds :)**