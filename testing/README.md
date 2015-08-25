# Setting up the Testing environment for a React-Native Project

## Creating test classes and methods ('.m' file)

In the test target are the test classes containing test methods. Each test class can have multiple test methods.  The test navigator shows the test classes and test methods in a hierarchical list.

A test method is an instance method of a test class that begins with the prefix `test`, takes no parameters, and returns void, for example, (void) testIsDivisibleByTwo()

All test classes are subclasses of XCTestCase, provided by the XCTest framework.

Basic Structure of an XCTestClass

```objectivec
  #import <XCTest/XCTest.h>

  @interface MyAppTests : XCTestCase
  @end

  @implementation MyAppTests

  // test methods
  - (void)testNAME_OF_TEST
  {
      // test logic
  }
  @end
```

When the tests execute, XCTest finds all the test classes and, for each class, runs all of its test methods.

## Importing libraries

For testing, we'll be using React's RCTTestRunner. This isn't one of the standard libraries included in Xcode, so to use it in our '.m' file, we'll have to import it as described in [this guide](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content).  
* First, find the xcodeproj in the RCTTestRunner directory (inside react-native in your node_modules). Then drag, this file into the libraries folder of your project in Xcode.
* Next, open the RCTTestRunner.xcodeproj, then its Products folder, in the left bar of Xcode, and Build Phases in the main window.
* Then, drag libRCTTest.a into the 'Link Binary With Libraries' list.
* Finally, open the Build Settings of your project, find the Search Paths section, and add `$(SRCROOT/node_modules/react-native/Libraries/RCTTestRunner)`. Set this to recursive.

Now, in your '.m' file, you can `#import <RCTTest/RCTTestRunner.h>`.

Test component

Individual tests

Snapshot Tests
