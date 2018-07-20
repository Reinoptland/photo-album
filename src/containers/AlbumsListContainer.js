import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from '../components/AlbumsList'
import { connect } from 'react-redux'
import { addAlbum, setAlbums, getAlbums } from '../actions/albums'

class AlbumsListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { addAlbum, setAlbums, getAlbums })(AlbumsListContainer)

// Look at api X
// Make Action creator X
// bind Action creator X
// call the action creator as this.props.actioncreator(arguments) X
// Handle the action (add case) X
// mapStateToProps X
// render that state X