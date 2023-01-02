
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/home/home';
import Signup from './screens/signup/signup';
import Login from './screens/login/login.jsx';
import Forgotpassword from './screens/login/forgotpassword.jsx';
import Sprofile from './screens/sprofile/sprofile';
import Navbar from './components/Navbar';

const Stack = createNativeStackNavigator();

const App =() => {
  return (
    
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name ='Login' options = {{headerShown :false}} component={Login}/>
<Stack.Screen name ='Signup'    component={Signup}/>
<Stack.Screen name ='Forgotpassword'    component={Forgotpassword}/>
<Stack.Screen name ='Home' options = {{headerShown :false}}  component={Home}/> 
<Stack.Screen name ='Sprofile' options = {{headerShown :false}}  component={Sprofile}/> 
{/* <Stack.Screen name ='Navbar'   component={Navbar}/>  */}
</Stack.Navigator>
</NavigationContainer>
   
    
  );
}


export default App;