import React from "react";
import UnsplashImage from "./UnsplashImage";
import Loader from "./Loader";
const API = `https://api.unsplash.com`;
const KEY = process.env.REACT_APP_ACCESSKEY;

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      searchTerm: "",
      error: "",
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const APIDEFAULT = `${API}/photos/random?client_id=${KEY}&count=8`;
    const res = await fetch(APIDEFAULT);
    const data = await res.json();
    console.log(data);
    this.setState({ images: data, loading: false });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    if (!this.state.searchTerm) {
      return this.setState({
        error: "Por favor escribe un texto valido",
        loading: false,
      });
    }

    let urlSearched = `${API}/search/photos/?query=${this.state.searchTerm}&per_page=8&client_id=${KEY}`;
    let res = await fetch(urlSearched);
    let data = await res.json();
    console.log(data);
    if (!data.results.length) {
      return this.setState({ error: "No hay resultados", loading: false });
    }
    this.setState({
      images: data.results,
      error: "",
      searchTerm: "",
      loading: false,
    });
  }

  render() {
    const { images, loading } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-md-4 offset-md-4 p-4">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type="text"
                className="form-control"
                placeholder="Buscar una categoria: Por Ejemplo Animals"
                autoComplete="off"
                autoFocus
                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                value={this.state.searchTerm}
              />
            </form>
            <p>{this.state.error ? this.state.error : ""}</p>
            {loading && <Loader />}
          </div>
        </div>
        <div className="gridImg">
          {images.map((image, index) => {
            return (
              <UnsplashImage
                key={index}
                title={image.alt_description}
                image={image.urls.thumb}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default List;
