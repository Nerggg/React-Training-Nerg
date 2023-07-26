import { useState } from 'react';
import './Text.css'
function Form() {
  const [name, setName] = useState("");

  return (
        <form >
            <input
            class="border-2 border-black-400 rounded bg-gray-200 w-full py-2 px-4"
            
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </form>

  )
}
export default Form;