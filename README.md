# Start

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Launch

`npm install`

`npm start`asfas

# Considerations

I am new in react + redux, and this project let me put in practice the new concepts that I am learning. 


## Design
As in the spec doesn't include anything related to design I have use materializecss, to focus in react part. Anyway I have included some css rules to make looks "not ugly"

I would like do something to much beautiful and interactive, I had a lot of ideas, but considering the spec I think this have a low priority.

This project also have been configured for use scss.

## Data
After fetch ingredients data, (in action) is neccesary to add an ID value and init status value to each object.

For methods was something more dificult, because raw data include some nested objects with diferent formats, so is necesary transfor that data to just an array of objets that include methods.

## React
I have try do everything following good practices that I am learning in react courses and that I read in documentation, like building two types of components: containers and presentationals conmponents making easy to separate concepts, and build a scalable applications.

Only files inside containers folder comunicate with redux, and supply all information needed to childs (IngredientList, ListItem...). I think this is a good aproach that make that components more reusables. 

I have not work yet with SOLID principes, I have try to get the single responsability, 


### Ingredients table
The same component is used for Hops and Malts. As hops have a disable codition it was neccesary included some fields for check this condition, malts don't need to supply that fields. 

With the countdown it will need some modifitations.  My idea is just use a diferent TableItem that include the duration, and use the same Table for Hops, malts, and methods. But for problemes with time, I have no chance to develop this feature.

# Not done

I didn't get time enought for make the count down for methods, I tryed it, but I would need more free time.

I also haven't done any test for the moment.

# Future work

* Include test test
* Add coundown
* Improve design