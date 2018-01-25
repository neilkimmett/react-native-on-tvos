//
//  NKSearchBar.m
//  TvTest-tvOS
//
//  Created by Neil Kimmett on 18/01/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NKSearchComponent.h"
#import <React/RCTComponent.h>
#import <React/UIView+React.h>
#import "NKSearchResultsViewController.h"

@implementation NKSearchComponent

- (void)reactBridgeDidFinishTransaction
{
  if (self.containerVC) {
    return;
  }

  UIViewController *reactController = self.reactSubviews.firstObject.reactViewController;
  NKSearchResultsViewController *resultsVC = [[NKSearchResultsViewController alloc] initWithReactViewController:reactController];

  UISearchController *searchController = [[UISearchController alloc] initWithSearchResultsController:resultsVC];
  searchController.searchResultsUpdater = self;

  self.containerVC = [[UISearchContainerViewController alloc] initWithSearchController:searchController];
  self.containerVC.tabBarItem = self.reactViewController.tabBarItem;

  UITabBarController *tabBarVC = self.reactViewController.tabBarController;
  NSMutableArray *viewControllers = tabBarVC.viewControllers.mutableCopy;
  NSUInteger index = [tabBarVC.viewControllers indexOfObject:self.reactViewController];
  [viewControllers replaceObjectAtIndex:index withObject:self.containerVC];
  tabBarVC.viewControllers = viewControllers;

  UIView *rootView = tabBarVC.view.window.rootViewController.view;
  for (UIGestureRecognizer *recognizer in rootView.gestureRecognizers) {
    if ([recognizer.allowedPressTypes containsObject:@(UIPressTypeSelect)] && [recognizer isKindOfClass:[UITapGestureRecognizer class]]) {
      [recognizer.view removeGestureRecognizer:recognizer];
    }
  }
}

- (void)updateSearchResultsForSearchController:(nonnull UISearchController *)searchController
{
  if (self.onChangeText) {
    self.onChangeText(@{@"text": searchController.searchBar.text});
  }
}


@end
