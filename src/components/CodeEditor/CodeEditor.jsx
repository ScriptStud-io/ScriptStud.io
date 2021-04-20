import React from "react";
import { render } from "react-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";

export default function CodeEditor(props) {
        console.log('props:', props)
        
// custom hooks - call on state change 
// custom hook to hold ace editor value 
        return (

        <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="sample"
        // onLoad={this.onLoad}
        onChange={props.handleSampleChange}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={props.sampleState.sample}
        setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        }}/>

        )
}