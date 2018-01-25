//
//  NKSearchResultsViewController.m
//  TvTest-tvOS
//
//  Created by Neil Kimmett on 18/01/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NKSearchResultsViewController.h"

@implementation NKSearchResultsViewController

- (instancetype)initWithReactViewController:(UIViewController *)reactViewController {
  if (self = [super init]) {
    _reactViewController = reactViewController;
    return self;
  }
  return nil;
}

- (void)viewDidLoad
{
  [super viewDidLoad];

  [self.view addSubview:self.reactViewController.view];
}


@end
