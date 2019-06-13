import React, { Component } from 'react';
import api from '../../services/api/';
import './new.css';


class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData();
        let { image, author, place, description, hashtags } = this.state;
        data.append('image', image);
        data.append('author', author);
        data.append('place', place);
        data.append('description', description);
        data.append('hashtags', hashtags);

        await api.post('/posts', data);
        this.props.history.push('/');
    };

    handleImageChange = (event) => {
        this.setState({image: event.target.files[0]});
    };

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return ( 
        <form id="new-post">
            <input type="file" onChange={this.handleImageChange} />
            
            <input type="text" name="author" placeholder="Autor do post" onChange={this.handleChange} value={this.state.author} />
            <input type="text" name="place" placeholder="Lugar onde a foto foi tirada" onChange={this.handleChange} value={this.state.place} />
            <input type="text" name="description" placeholder="Descrição" onChange={this.handleChange} value={this.state.description} />
            <input type="text" name="hashtags" placeholder="Hashtags do post" onChange={this.handleChange} value={this.state.hashtags} />
            <button type="submit" onClick={this.handleSubmit}>Enviar</button>
        </form>
            );
    }
}

export default New;