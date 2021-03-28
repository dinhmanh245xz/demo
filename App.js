import React from 'react';
import type {Node} from 'react';
import {
  View,Text, TextInput,
} from 'react-native';


class Login extends React.Component{
    render(){
      return(
          <View style={{
            flex:1,
           
            }}> 
               <View style={{flex:5}}>
                    <View style={{flex:2,
                    alignItems:'center',
                    justifyContent:'center'}}>
                            <Text style={{fontSize:50,
                            color:'#323232',
                            fontWeight:'bold'}}>
                                LOGIN</Text>
                    </View>
                    <View style={{flex:2, justifyContent:'flex-start', padding:10,}}>
                            <TextInput style={{backgroundColor:'#e6e6e6',
                            fontSize:30,
                            padding:20,
                            
                            justifyContent:'center'  }}
                             placeholder="Email" />
                            <TextInput style={{backgroundColor:'#e6e6e6',
                            fontSize:30,
                            padding:20,
                            marginTop:10,
                            justifyContent:'center'  }}
                             placeholder="Password" />
                        
                        <Text style={{color:'#e6e6e6',fontSize:20}}>Remember me</Text>
                        <View style={{backgroundColor:'#ba4884',
                           borderWidth:1, borderColor:'black',borderRadius:10,padding:20,
                           margin:10,
                           alignItems:'center', }}>
                        <Text style={{color:'#ffff',fontSize:20}} >LOGIN</Text>                   
                        </View>       
                    </View>
                    
               </View>
               <View style={{flex:3,}}>
            <View style={{flex:1,
                         }}>
                            <View style={{flex:2, alignItems:'center',justifyContent:'center', }}>
                                    <Text style={{fontSize:13,color:'#e6e6e6'}}> or loggin with</Text>
                        </View>
                        <View style={{flex:2,borderColor:'#e6e6e6',
                        
                        justifyContent:'center',
                      
                        width:400,
                        margin:20,
                        alignSelf:'center',
                        flexDirection:'row'
                        }}>
                                   <View style={{flex:2 , 
                                   backgroundColor:'#e6e6e6',
                                    margin:10 ,
                                    padding:10,
                                    borderWidth:0.3,
                                    alignItems:'center',
                                    justifyContent:'center', }}>
                                       <View style={{flex:1 , }}>
                                         <Text style={{color:'blue', fontSize:10}}>Facebook</Text>
                                       </View>
                                   </View>
                                   <View style={{flex:2 , borderWidth:1,
                                    margin:10 ,
                                    padding:10,
                                    backgroundColor:'#e6e6e6',
                                    alignItems:'center',
                                    justifyContent:'center',
                                   
                                  }}>
                                   <View style={{flex:1 , }}>
                                         <Text style={{color:'black', fontSize:10, 
                                      
                                    }}>Google</Text>
                                   </View>
                                   </View>
                                    
                        </View>
                        
                        
           </View>
                <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#e6e6e6'}} >Not a member ? Sing up now</Text>
                </View>

               </View>
             
      
  
          </View>
      );
    }
  }


class App extends React.Component{
    render(){
      return(
          <View style={{
            flex:1,
            flexDirection: 'row',
            }}> 
               <Login />
             
      
  
          </View>
      );
    }
  }
export default App;