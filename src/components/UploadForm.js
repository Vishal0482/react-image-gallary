import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError("Please select image file(png or jpg)");
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} className="input-field"/>
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="message"> {error} </div>}
                {file && <div className="message"> {file.name} </div>}
                {file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
        </form>
    );
};

export default UploadForm;