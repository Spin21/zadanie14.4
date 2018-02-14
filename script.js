var Movie = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('img', {src: this.props.movies.img})
      )
    )
  },
});

var MovieTitle = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movies.title),
      )
    )
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movies.desc),
      )
    )
  },
});
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

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements),
  );

ReactDOM.render(element, document.getElementById('app'));