import React from 'react';
import algoliasearch from 'algoliasearch';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Table from './Table';

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
        <MuiThemeProvider>
            <div>
                <input
                    type="text"
                    value={this.state.searchKey}
                    onChange={this.handleChange}
                />

            </div>
            <Table
                data={this.state.items}
                header={[
                    {
                        name: "Arabic Title",
                        prop: "title_arab"
                    },
                    {
                        name: "English Title",
                        prop: "title_engl",
                    },
                    {
                        name: "UPC",
                        prop: "upc"
                    },
                    {
                        name: "Price",
                        prop: "price"
                    },
                    {
                        name: "cost",
                        prop: "cost",
                    },
                    {
                        name: "image",
                        prop: "image_url",
                    },
                ]}
            />
        </MuiThemeProvider>
        );
    }
}

export default Home;