
# Phone React Component

**WARNING, this repo is *deprecated***

**If you want to make use of this component, it has been ported over to the package `dashboard-widgets`:**

- NPM: https://www.npmjs.com/package/dashboard-widgets
- Github: https://github.com/Benny121221/dashboard-widgets

**That package is the only recommended way to use this component. This repository will not be deleted, but it also will not be maintained.**

## Your regularly scheduled documentation:
 
 [Link to Screenshot](https://imgur.com/peoRBmB)
 
## Easy, free use
    <Phone>
	    <h1>Phone Content Here</h1>
	    <p>
		    You can put any HTML or JSX here, 
		    from a simple image to a complicated react component
	    </p>
	</Phone>

### Need to accommadate a smaller screen?
    <Phone small={true}>
	    <h1>Shrunken size, suitable for smaller graphics</h1>
	    <p>Exact same rules as before</p>
	</Phone>


### Not a typescript fan?

No problem, just use `index.js` instead. If you import only the folder: 
`import Phone from "../ext/components/Phone"`, it will automatically use the JavaScript version anyways. There are no differences between the two, the JS is just the compiled version.
