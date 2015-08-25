#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>

#import <RCTTest/RCTTestRunner.h>

#import "RCTAssert.h"

@interface IntegrationTests : XCTestCase

@end

@implementation IntegrationTests
{
  RCTTestRunner *_runner;
}

- (void)setUp
{
#if __LP64__
  RCTAssert(NO, @"Tests should be run on 32-bit device simulators (e.g. iPhone 5)");
#endif

  NSOperatingSystemVersion version = [[NSProcessInfo processInfo] operatingSystemVersion];
  RCTAssert(version.majorVersion == 8 || version.minorVersion >= 3, @"Tests should be run on iOS 8.3+, found %zd.%zd.%zd", version.majorVersion, version.minorVersion, version.patchVersion);
  _runner = RCTInitRunnerForApp(@"testing/testingTests/IntegrationTests.js", nil);
}

#pragma mark Logic Tests

- (void)testTest
{
  [_runner runTest:_cmd module:@"exampletest"];
}

// #pragma mark Snapshot Tests
//
// - (void)testFAC
// {
//   _runner.recordMode = NO;
//   [_runner runTest:_cmd module:@"FACTest"];
// }


@end