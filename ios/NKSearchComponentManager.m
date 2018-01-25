//
//  NKSearchBarManager.m
//  TvTest-tvOS
//
//  Created by Neil Kimmett on 18/01/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NKSearchComponentManager.h"
#import "NKSearchComponent.h"

@implementation NKSearchComponentManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(onChangeText, RCTBubblingEventBlock)

- (UIView *)view
{
  return [[NKSearchComponent alloc] init];
}

@end
