import React from 'react';
import algoliasearch from 'algoliasearch';

const algoliaSearchApiKey = 'dcab3e9b0c8c0777b65ba2df62dd9851';
const algoliaSearchAppKey = 'XGGBUZ5OGH';


var client = algoliasearch(algoliaSearchAppKey, algoliaSearchApiKey);
var index = client.initIndex('asdekaa_sidigaber');

class Home extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            searchKey:"",
            items: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        const searchKey = event.target.value;
        this.setState({searchKey});

        index.search(searchKey, (err, content) => {
            this.setState({
                items: content.hits
            });
        });
    }


    render(){
        console.log(this.state.items);
        return(
            <div>
                <input
                    type="text"
                    value={this.state.searchKey}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Home;