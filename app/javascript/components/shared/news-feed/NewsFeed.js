import React from 'react';
import axios from 'axios';

const API_KEY = document.getElementById('news').getAttribute('data-src');

class NewsFeed extends React.Component {


    constructor(props) {
        
        super(props);
        this.state = {};
        
    }

    componentDidMount() {

        if (this.state.cycle) {

            clearInterval(this.state.cycle);

        }

        axios.get(`https://newsapi.org/v2/everything?&apiKey=${API_KEY}&q=new_york`)
                        .then(function (response) {

                            console.log(response);

                    
                        })
                        .catch(function (error) {

                            console.log(error);
                            
                        });


    }

    render() {

        return (

            <div className="newsFeedContainer">
                {!Object.keys(this.state).length ? '' : <p>{this.state.articles[this.state.index]}</p>}
            </div>

            

        );

    }

}

export default NewsFeed;