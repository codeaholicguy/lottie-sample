import React from 'react'
import Link from 'gatsby-link'
import lottie from 'lottie-web'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {show: false}
  }

  componentDidUpdate() {
    if (this._el) {
      this._animation = lottie.loadAnimation({
        container: this._el,
        renderer: 'svg',
        path: 'static/animation.json',
      })
    }
  }

  _click = () => {
    this.setState({show: true})

    setTimeout(() => this.setState({show: false}), 1500)
  }

  render() {
    return (
      <div>
        <p>Now go build something great.</p>
        <p>
          {'This is my '}
          <span
            style={{
              fontWeight: 'bold',
              color: 'purple',
              cursor: 'pointer',
            }}
            onClick={this._click}
          >
            BFF
          </span>
        </p>
        {this.state.show && (
          <div
            id="animation"
            ref={el => (this._el = el)}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
            }}
          />
        )}
      </div>
    )
  }
}

export default IndexPage
