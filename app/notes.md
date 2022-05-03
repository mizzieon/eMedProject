<!-- General -->
I'm going to develop the app by using child elements to collect 
and display the data. The data will be stored in App.js. The
data and callbacks will be passed to child elements through 
props. Normally I'd use Redux for state management but I wanted to 
keep the app as small as possible.


<!-- Issues -->
Ran into some issues storing the child components arrays
into the parent components state using the callbacks. The
solution was to move most of the logic to the useEffect method
or the FileReader method