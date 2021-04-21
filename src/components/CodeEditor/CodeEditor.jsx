import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

export default function CodeEditor(props) {

        return (
        <div id="editor">
                <AceEditor
                placeholder="Insert Snippet"
                mode="javascript"
                theme="monokai"
                name={props.name}
                height="250px"
                width="515px"
                // onLoad={this.onLoad}
                onChange={(e) => props.handleChange(e, props.name)}
                fontSize={16}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={props.state[props.name]}
                setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
                }}/>
        </div>
        )
}