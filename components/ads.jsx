import { useState,useEffect } from 'react'; 
import { render } from 'react-dom';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Ninjas from '../pages/adds';

function Ads (){  
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //   getUsers();
    // }, []);
  
    // async function getUsers() {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //   const users = await response.json();
    //   setUsers(users);
    //   console.log(users)
    // }
    return(
        <div>            
      {/* <ul>

      {users.map(user => (
          <div>
        <li>
          <Link href={"/adds/" + user.id}>
          {user.name}
          </Link>
          </li>
        </div>
      ))}
    </ul> */}
    <Ninjas />
        </div>
    )
}
export default Ads;
