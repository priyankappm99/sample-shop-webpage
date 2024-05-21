import React, { useState } from 'react';

function Test() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false)

 function handleSubmit (){
  setSubmitted(true)
console.log()
 }


  return (
    <div>
      <div>
        <form >
          <label>
          Name:  <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          >

          </input>
          </label>
          Phone Number : <input type="Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          ></input>
          Email : <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
          <button type="submit" onClick={handleSubmit}> Submit</button>
          {submitted?<div>welcome priyanka</div>:<div></div>}
        </form>
      </div>
    </div>
  );
}

export default Test;