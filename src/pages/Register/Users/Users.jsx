import React, { useState } from 'react'

export default function Users(props) {

    const User = [ 

        {
            name: "Wildes Sousa",
            cpf: "7771",
            email: "teste@tonabroca.br",
            password: "123",
            typeUser: "cliente",
        },
        {
            name: "Diego Sousa",
            cpf: "7771",
            email: "teste@elibraria.br",
            password: "123",
            typeUser: "cliente",
        },
    
    ];



    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newType, setNewType] = useState("");

    

  return (
    <div>
      {User.map((user)=>{
        return(
            <div>
                <p>{user.email}</p>
                <p>{user.name}</p>
            </div>
        );
      })}
    </div>
  );
}