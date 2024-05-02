import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [name, setName] = useState("pikachu");

  // const [skill_0, setSkill_0] = useState();
  // const [skill_1, setSkill_1] = useState();

  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setName(response.data.name);
        // setSkill_0(response.data.abilities[0].ability.name);
        // setSkill_1(response.data.abilities[1].ability.name);
      })
      .catch((error) => {
        window.alert(error);
      });
  }, [URL]);

  return (
    <div className="app">
      <h1>Pokemon</h1>

      <div className="area" style={{ position: "relative" }}>
        <img
          className="background"
          src="https://i.imgur.com/2t3S7Wq.jpg"
          alt="background"
        />

        <select
          className="dropdown"
          onChange={(e) => {
            setName(e.target.value);
          }}
        >
          <option value="pikachu">Pikachu</option>
          <option value="psyduck">Psyduck</option>
          <option value="squirtle">Squirtle</option>
          <option value="clefairy">Clefairy</option>
          <option value="snorlax">Snorlax</option>
          <option value="diglett">Diglett</option>
          <option value="eevee">Eevee</option>
          <option value="slowpoke">Slowpoke</option>
          <option value="gengar">Gengar</option>
          <option value="eevee">Eevee</option>
        </select>

        <h2 className="namePoke">{name}</h2>
        <img
          className="pokemon"
          src={
            data
              ? data.sprites.other.showdown.back_default
              : "<h1>Loading...</h1>"
          }
        />
        <div className="skillList">
          {data
            ? data.abilities.map((value, key) => {
                return (
                  <button className="skillName" key={key}>
                    {value.ability.name}
                  </button>
                );
              })
            : ""}
        </div>
        {/* <button className="skill_0">{skill_0}</button>
        <button className="skill_1">{skill_1}</button> */}

        <h2 className="nameMons">snorlax</h2>
        <img
          className="monster"
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/143.gif"
          }
        />
      </div>
    </div>
  );
}

export default App;
