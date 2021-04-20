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
                maxLines: 20,
                }}/>
        </div>
        )
}