/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  View,Text
} from 'react-native';

class C1 extends React.Component{
  render(){
    return(
      <View style={{
        flex:1,
        
          }}>
            <View style={{
              flex:4,
              backgroundColor:'red',
               }}>            
            </View> 

            <View style={{
              flex:6,
              backgroundColor:'blue',
              }}>            
            </View>           
    </View>
    )
  }
}
class C2 extends React.Component{
  render(){
    return(
      <View style={{
        flex:1,
        
          }}>
            <View style={{
              flex:4,
              backgroundColor:'green',
             }}>            
           </View>
           <View style={{
              flex:4,
              backgroundColor:'red',
             }}>            
           </View>
           <View style={{
              flex:2,
              backgroundColor:'green',
             }}>            
           </View>                
      </View>
      
    )
  }
}
class C3 extends React.Component{
  render(){
    return(
      <View style={{
        flex:3,
        backgroundColor:'blue',
          }}>
                    <View style={{
                flex:2,
                backgroundColor:'blue',
                  }}>            
            </View> 
                      <View style={{
                  flex:8,
                   flexDirection:'row'
                    }}>
                      <View style={{
                        flex:2,
                        backgroundColor:'green',
                          }}> 
                          <View style={{flex:3, flexDirection:'row'}}>
                            <View style={{flex:1, backgroundColor:'yellow'}}></View>
                            <View style={{flex:1, backgroundColor:'green'}}></View>
                          </View>
                          <View style={{flex:1, backgroundColor:'blue'}}></View>           
                    </View> 
                          <View style={{
                          flex:1,
                          backgroundColor:'red',
                            }}>            
                      </View>                               
              </View>           
    </View>
    )
  }
}
class App extends React.Component{
  render(){
    return(
        <View style={{
          flex:1,
          flexDirection: 'row',
          }}> 
             
            <C1/>
            <C2/>
            <C3/>
    

        </View>
    );
  }
}

export default App1;


