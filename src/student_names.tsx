import { useState } from "react";

export function Header() {
  return (
    <>
      <h1>Fitech Top Student Of The Week</h1>
    </>
  );
}

export function Names() {
  const [names, setNames] = useState(0);
  const studentNames = [
    "Tali Nanzing Moses",
    "David Shammah",
    "Shittu Aisha Kabir",
    "Musa Fatima Isa",
    "Adetoro Islamiat Eniola",
    "Abdullahi Isa",
    "Irmiya Jethro Mbata",
    "Abubakar Asma'u",
    "Chukwu Obed",
    "Luka Reuben",
    "Rufai Usman",
    "Yusuf Taibat Olayinka",
  ];
  

  function updateName() {
    if(names < studentNames.length - 1){
        setNames(names + 1);
    } else{
        setNames(0)
    }
  }
  return (
    <>
      <h3>{studentNames[names]}</h3>

      <button onClick={updateName}>Next</button>
    </>
  );
}
