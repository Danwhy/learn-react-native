# learn-react-native

A collection of examples/guides to using React-Native.

[Counter](https://github.com/Danwhy/learn-react-native/tree/master/counter) - React Native basics.  
[Navigator] (https://github.com/Danwhy/learn-react-native/tree/master/navigator) - The basics of using the Navigator component.  
[Panhandler] (https://github.com/Danwhy/learn-react-native/tree/master/panhandling) - The basics of gestures and the panResponder.  
[Testing] (https://github.com/Danwhy/learn-react-native/tree/master/testing) - Setting up a runner to test your app.  
[Swipe] (https://github.com/Danwhy/learn-react-native/tree/master/swipe) - Using panhandlers and animations to delete list items when you swipe them.

First, make sure you have at least version 6.3 of Xcode, and have installed iojs and react native (`npm install -g react-native-cli`).  
See https://facebook.github.io/react-native/docs/getting-started.html#content for more details.

To run these examples, clone the repo, open the `.xcodeproj` files in xcode, and press the 'run' button.  
If this doesn't work for you, you may need to run `npm install` inside the example's directory to install react-native locally. Then run `npm run start` to start the react packager, and try the above again.

To run the tests in the `testing` directory, in Xcode press `Cmd+U`.
