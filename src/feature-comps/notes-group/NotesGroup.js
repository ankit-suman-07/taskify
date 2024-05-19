import React, { useState } from 'react';
import "./NotesGroup.css";

const NotesGroup = () => {

    const [notes, setNotes] = useState([
        ["A headless heed", "The dreamer dreams for the soul"],
        ["Bongo", "An alien that came to earth and was just being an asshole."],
        ["A poem", "Write me a poem, for love makes me writhe with sorrow."]
    ]);

    return (
        <>
            <div className='notes-top' >

            </div>
            <form>

            </form>
            <div className='notes-group' >
                {
                    notes.map((note) => {
                        return (
                            <div className='note' >
                                {note[0]}
                                <div>
                                    {
                                        note[1]
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default NotesGroup