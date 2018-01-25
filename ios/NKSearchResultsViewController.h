//
//  NKSearchResultsViewController.h
//  TvTest-tvOS
//
//  Created by Neil Kimmett on 18/01/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface NKSearchResultsViewController : UIViewController

- (instancetype)initWithReactViewController:(UIViewController *)reactViewController;

@property UIViewController *reactViewController;

@end
