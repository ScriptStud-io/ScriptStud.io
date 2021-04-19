 {/*  old code */}
                <h2>Create Snippet</h2>
                
                

                <label>
                    <span>Purpose:</span>
                    <input name="purpose" 
                    value={this.state.purpose}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need to be code syntax */}
                <label>
                    <span>Generic:</span>
                    <input name="generic" 
                    value={this.state.generic}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>

                <label>
                    <span>Notes:</span>
                    <input name="notes" 
                    value={this.state.notes}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need to be code syntax */}       
                <label>
                    <span>Sample:</span>
                    <input name="sample" 
                    value={this.state.sample}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>
        {/* TODO: This input will need refactoring for tag autocomplete with possibly semantic UI multiple selection functionality. MVP level functionality could use parsing by '\s' (spaces) to bring in each seperate tag if multiple present */}
                <label>
                    <span>Tags:</span>
                    <input name="tags" 
                    value={this.state.tags}
                    onChange={this.handleChange} 
                    required
                    pattern=".{4,}"
                    />
                </label>

                <button 
                type='submit'
                disabled={this.state.formInvalid}
                >ADD Snippet</button>
                </form>
            </div>
 
 
