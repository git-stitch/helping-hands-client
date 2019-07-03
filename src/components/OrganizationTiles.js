import React from 'react'
import { connect } from 'react-redux'
import {setImages} from '../Redux/actions'

class OrganizationTiles extends React.Component {
  componentDidMount = () => {
    this.props.setImages()
  }

  render() {
    console.log(this.props,"hello in tiles")
    const { currentOrganization } = this.props
    const { organization_images } = (currentOrganization || [])
    console.log(organization_images, "images")
      return (
      <div className="section">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">What We're Doing</p>
            <p className="subtitle">{this.props.organization.events === undefined ? "" : this.props.organization.events[0].name}</p>
            <br></br>
            <p>{this.props.organization.events === undefined ? "" : this.props.organization.events[0].description}</p>
            <br />
            <p className="title">Attending</p>
            <p className="subtitle is-1"><i class="fas fa-user-astronaut"></i>  {this.props.organization.events === undefined ? "" : this.props.organization.events[0].users.length}</p>
            <button className="button is-primary">Attend This Event</button>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Community Outreach</p>
            <figure className="image is-1by1">
                  <img src={this.props.organization.organization_images === undefined ? "" : this.props.organization.organization_images[0].img_url} 
                  alt="logo"/>
                </figure>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Third column</p>
            <p className="subtitle">With some content</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box">
                <p className="title">Our Mission</p>
                <br></br>
                <p className="subtitle">{currentOrganization.mission_statement}</p>
              </article>
              <article className="tile is-child box">
                <p className="title">Home Page</p>
                <br></br>
                <a href={currentOrganization.homepage_url}><p className="subtitle">{currentOrganization.homepage_url}</p></a>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">{currentOrganization.name}</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-1by1">
                  <img src={currentOrganization.logo_url} alt="logo"/>
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Wide column</p>
              <p className="subtitle">Aligned with the right column</p>
              <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content">
              <p className="title">About Us</p>
              <p className="subtitle"></p>
              <div className="content">
                <p>{currentOrganization.bio}</p>
                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Connect With Us</p>
            <div className="content">
              <nav className="level">
              {
                this.props.organization.organization_socials ? 
                this.props.organization.organization_socials.map(media => {
                  return (
                    <>
                      <div className="level-item has-text-centered">
                        <div>
                          <a href={`${media.url}`}><p><i class={`fab fa-${media.social_media_name.toLowerCase()}`}></i>
                          </p></a>
                        </div>
                      </div>
                    </>
                  )
                })
                :
                null
              }
            </nav>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article className="tile is-child box">
            <p className="title">Main column</p>
            <p className="subtitle">With some content</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
    </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentOrganization:state.organizationReducer.currentOrganization,
    organizationImages:state.organizationReducer.organizationImages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setImages: () => {
      dispatch(setImages())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrganizationTiles)