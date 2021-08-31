# Digital clock
## Tutorial
### Create a new clock:
```javascript
let clock = new Clock({ template, wrapper });
```
### Notice:
*Template* is a string used to replace such keywords while rendering:

  1. **hh** -> hours
  1. **mm** -> minutes
  1. **ss** -> seconds
  1. **pp** -> period
  
*Wrapper* is the element where you want to render the clock.
### Start the clock:
```javascript
clock.start();
```
### Pause the clock:
```javascript
clock.pause(delay);
```
### Stop the clock:
```javascript
clock.stop();
```
## Example
```javascript
let wrapper = document.getElementById('clock');
let clock = new Clock({ 
  template: 'hh:mm:ss pp',
  wrapper
});

clock.start();
clock.pause(5000);

setTimeout(() => clock.stop(), 10000);
```
