import { useState } from 'react'
import './App.css'

function App(){
            const [showPassword, setShowPassword] = useState('true');
                function showHidePassword(){
                    if(showPassword){
                        setShowPassword(false);
                    }else{
                        setShowPassword(true);
                    }
                }
           return (
            <>
                <p class="paragraph-design">Hello, welcome to my website </p>
                <div>
                <input placeholder="Email"
                    class="input-design"
                />
                </div>
                <div>
                <input placeholder="Password"
                    class="input-design"
                    type={showPassword ? 'text' : 'password'}/>
                <button 
                onClick={showHidePassword}
                class="show-hide-button"
                >{showPassword? 'hide':'show'}</button>
                </div>
                <button class="button-design">login</button>
                <button
                class="button-design">Sign up</button>
            </>
           )
        }

export default App
