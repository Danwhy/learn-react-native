# Setting up the Testing environment for a React-Native Project

##Creating test classes and methods ('.m' file)

In the test target are the test classes containing test methods. Each test class can have multiple test methods.  The test navigator in XCode shows the test classes and test methods in a hierarchical list.

A test method is an instance of a test class that begins with the prefix `test`. It takes no parameters, and returns void e.g. `(void) testIsDivisibleByTwo()`

All test classes are subclasses of XCTestCase, provided by the [XCTest framework](https://developer.apple.com/library/ios/documentation/DeveloperTools/Conceptual/testing_with_xcode/testing_1_quick_start/testing_1_quick_start.html#//apple_ref/doc/uid/TP40014132-CH2-SW1).

Basic Structure of an XCTestClass:

```objectivec
  #import <XCTest/XCTest.h>

  @interface MyAppTests : XCTestCase
  @end

  @implementation MyAppTests

  // setUp and tearDown functions carried out before and after each test respectively

  - (void)setUp
  {
      // Put additional setup code here.
  }

  - (void)tearDown
  {
      // Put additional teardown code here.
  }

  // test methods
  - (void)testNAME_OF_TEST
  {
      // test logic
  }
  @end
```

When the tests execute, XCTest finds all the test classes and, for each class, runs all of its test methods.

For testing ReactNative, the RCTTestRunner also needs to be imported.  RCTTestRunner sets up the ReactNative environment and provides facilities to run the tests as XCTestCases in Xcode.

The individual tests are defined separately as React Components and required into a parent component that acts as a Test Runner.

The `runTest` method of the `RCTTestRunner` mounts the specified JS test module and waits for it to call `RCTTestModule.markTestCompleted()`. JS errors/exceptions and timeouts will fail the test.

```
  @param test Selector of the test, usually just `_cmd` which
  @param moduleName Name of the React JS component as registered by `AppRegistry.registerComponent` in the React test runner component JS file.
  */

  `- (void)runTest:(SEL)test module:(NSString *)moduleName;`
```

Example implementation:

```objectivec
  #import <UIKit/UIKit.h>
  #import <XCTest/XCTest.h>

  #import <RCTTest/RCTTestRunner.h>

  #import "RCTAssert.h"

  @interface IntegrationTests : XCTestCase

  @end

  @implementation IntegrationTests
  {
    RCTTestRunner *_runner;       //_runner is a pointer to the RCTTestRunner
  }

  - (void)setUp
  {
  #if __LP64__
    RCTAssert(NO, @"Tests should be run on 32-bit device simulators (e.g. iPhone 5)");
  #endif

    NSOperatingSystemVersion version = [[NSProcessInfo processInfo] operatingSystemVersion];
    RCTAssert(version.majorVersion == 8 || version.minorVersion >= 3, @"Tests should be run on iOS 8.3+, found %zd.%zd.%zd", version.majorVersion, version.minorVersion, version.patchVersion);
    _runner = RCTInitRunnerForApp(@"LOCATION_OF_REACT_TEST_RUNNER_COMPONENT", nil);
  }

  #pragma mark Logic Tests

  - (void)testNAME_OF_TEST
  {
    [_runner runTest:_cmd module:@"NAME_OF_REACT_TEST_COMPONENT"];  
  }

  @end
```

Within the React Test Runner component the `RCTTestModule` is exported to JS as `NativeModules.TestModule` so the individual tests are written in JavaScript. Each test must call `TestModule.markTestCompleted()`` when completed, otherwise the test will timeout and fail.


## Importing libraries

For testing, we'll be using React's RCTTestRunner. This isn't one of the standard libraries included in Xcode, so to use it in our '.m' file, we'll have to import it as described in [this guide](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content).  
* First, find the xcodeproj in the RCTTestRunner directory (inside react-native in your node_modules). Then drag, this file into the libraries folder of your project in Xcode.
* Next, open the RCTTestRunner.xcodeproj, then its Products folder, in the left bar of Xcode, and Build Phases in the main window.
* Then, drag libRCTTest.a into the 'Link Binary With Libraries' list.
* Finally, open the Build Settings of your project, find the Search Paths section, and add `$(SRCROOT/node_modules/react-native/Libraries/RCTTest)`. Set this to recursive.

Now, in your '.m' file, you can `#import <RCTTest/RCTTestRunner.h>`.

## Setting preprocessor macros in Xcode

In the React RCTTestRunner library it notes that we should
```
* Add this to your test target's gcc preprocessor macros:
 *
 *   FB_REFERENCE_IMAGE_DIR="\"$(SOURCE_ROOT)/$(PROJECT_NAME)Tests/ReferenceImages\""
 ```
 To do this, click on your project in the left bar, then click this button:

 ![](http://i.imgur.com/C4N6MsR.png?1)

and in targets, choose your test file.

Then select Build Settings, and find the heading **Apple LLVM 7.0 - Preprocessing**.

Then add `FB_REFERENCE_IMAGE_DIR="\"$(SOURCE_ROOT)/$(PROJECT_NAME)Tests/ReferenceImages\""` to the Debug preprocessor macro.
