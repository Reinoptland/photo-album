import * as React from 'react'
import PhotoPage from '../components/PhotoPage'
import { connect } from 'react-redux'

class PhotoPageContainer extends React.PureComponent {
  componentDidMount() {
    const albumId = this.props.match.params.id
    console.log(`Now fetch photos for albumId = ${albumId}`)
  }

  render() {
    if (!this.props.photos) return 'Loading...'
    return <PhotoPage photos={this.props.photos} />
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(PhotoPageContainer)