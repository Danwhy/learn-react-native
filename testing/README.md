#Setting up the Testing environment for a React-Native Project

##Creating a testing target



##Creating test classes and methods ('.m' file)

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

Importing libraries

Test component

Individual tests

Snapshot Tests
