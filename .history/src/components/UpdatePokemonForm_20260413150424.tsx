import { useState } from "react";
import type { SubmitEvent, JSX } from "react";
import type { Pokemon } from "./Pokemon.tsx";

export function UpdatePokemonForm({setUpdated} : {setUpdated: (val: Pokemon) => void}) : JSX.Element {
    const [oldName, setOldName] = useState<string>('');
    const [oldType, setOldType] = useState<string>('');
    const [newName, setNewName] = useState<string>('');
    const [newType, setNewType] = useState<string>('');

    const handleSubmit = async (event: SubmitEvent) => {
        event.preventDefault();

        const requestOptions = {
            method: "PUT",
            body: JSON.stringify({
                oldName: oldName,
                oldType: oldType,
                newName: newName,
                newType: newType,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        };
        const response = await fetch("http://localhost:1339/pokemons", requestOptions);
        const result = await response.json();
        setUpdated(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="oldName">Current Name</label>
            <input type="text" placeholder="Current Name..." onChange={(e) => setOldName(e.target.value)} />
            
            <label htmlFor="oldType">Current Type</label>
            <input type="text" placeholder="Current Type..." onChange={(e) => setOldType(e.target.value)} />
            
            <label htmlFor="newName">New Name</label>
            <input type="text" placeholder="New Name..." onChange={(e) => setNewName(e.target.value)} />
            
            <label htmlFor="newType">New Type</label>
            <input type="text" placeholder="New Type..." onChange={(e) => setNewType(e.target.value)} />
            
            {(oldName && newName && newType) && <button type="submit">Update Pokemon</button>}
        </form>
    );
}