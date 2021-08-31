let wrapper = document.getElementById('clock');
let clock = new Clock({ template: 'hh:mm:ss pp', wrapper });

clock.start();