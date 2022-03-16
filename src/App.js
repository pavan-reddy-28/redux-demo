
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { DataTableValue, Title, Wrapper } from "./styles/app"
import {collection, getDocs} from "firebase/firestore"
import {useDispatch, useSelector} from 'react-redux'
import { getUser } from "./redux/actions/userActions";
function App() {
const [users, setUsers] = useState([]);
const dispatch = useDispatch();

// const usersCollectionRef = collection(db,"users")
// console.log('env ',process.env)
// firebase useEffect
  // useEffect(()=>{
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getUsers();
  // },[])

  // redux saga useeffect
useEffect(()=>{
dispatch(getUser());
},[dispatch]);

const data = useSelector((state)=> state.user.user)
console.log('user data : ',data)
  return (
    <div className="App">
      <Wrapper>
        {users?
        users.map(obj=>{
          return(<Title><DataTableValue>{"Name : "+obj.name}</DataTableValue><DataTableValue>{"Age : "+obj.age}</DataTableValue></Title>)
        })
        :
        <>
          <Title>EMPTY DATA</Title>
        </>}
      </Wrapper>
    </div>
  );
}

export default App;
