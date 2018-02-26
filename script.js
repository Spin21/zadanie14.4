var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: "https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
  },
  {
  	id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1447116299000/photosp/6e0aea1d-5225-4aa4-8ffe-2fd6c04ffdd7/stock-photo-lion-leo-warsawzoo-lv-lew-6e0aea1d-5225-4aa4-8ffe-2fd6c04ffdd7.jpg"
  },
  {
  	id: 3,
  	title: 'Raport mniejszości',
  	desc: 'Film o przyszłości',
  	img: "https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
  },
  {
  	id: 4,
  	title: 'Blade runner',
  	desc: 'Łowca androidów',
  	img: "https://images.pexels.com/photos/796545/pexels-photo-796545.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb"
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('p', {}, this.props.description),
      React.createElement('img', {src: this.props.image})
    );      
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  }, 

  render: function() {
    return React.createElement('li', {},
      React.createElement(MovieTitle, {title: this.props.movie.title}),
      React.createElement(MovieDescription, {description: this.props.movie.desc, image: this.props.movie.img})      
    );
  }
});

var MoviesList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function() {
    var moviesElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {movie: movie, key: movie.id});
    });

    return React.createElement('ul', {}, moviesElements);
  }
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(MoviesList, {movies: movies}),
  );

ReactDOM.render(element, document.getElementById('app'));
