#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>
#import "CDVReachability.h"

@interface CDVEcho : CDVPlugin {
    NSString* type;
    NSString* _callbackId;
}
@end
