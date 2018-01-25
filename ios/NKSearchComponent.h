//
//  NKSearchBar.h
//  TvTest-tvOS
//
//  Created by Neil Kimmett on 18/01/2018.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <React/RCTComponent.h>

@interface NKSearchComponent : UIView

@property UISearchContainerViewController *containerVC;

@property (nonatomic, copy) RCTBubblingEventBlock onChangeText;


@end
