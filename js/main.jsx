import './../scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react'
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded', function () {

    class Home extends React.Component {
        render() {
            return <div className='homeStyle'>
                <h1 className='home'>Witaj na mojej stronie!</h1>
                <div className='picture'></div>
            </div>
        }
    }

//mapa!
    const AnyReactComponent = ({text}) => <div id='map'>{text}</div>;

    class Map extends React.Component {
        static defaultProps = {
            center: {lat: 50.2870900, lng: 21.4239000},
            zoom: 11
        }

        render() {
            return (
                <div className='google-map'>
                    <GoogleMapReact
                        apiKey='AIzaSyD9JJLB8Vv1X8OZgio6dl2P3A1DIn8kvkI'
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                        <AnyReactComponent
                            lat={50.2870900}
                            lng={21.4239000}
                            text={''}
                        />
                    </GoogleMapReact>
                </div>
            )
        }
    }

    class AboutMe extends React.Component {
        render() {
            return (
            <div className='aboutMe'>
                <div className='birth'>
                    <div className='birthPic'></div>
                    <h1>NARODZINY</h1>
                    <p>Najpiękniejsza pora roku.. Jesień! Właśnie wtedy - w 1997 roku
                        na świat przyszłam ja!
                    </p>
                </div>
                <div className='location'>
                    <div className='locationPic'></div>
                    <h1>DORASTAŁAM TUTAJ...</h1>
                    <p>Urodziłam się w turystycznej miejscowości Segovia - w Hiszpanii, niedługo
                        jednak po narodzinach - <br></br> wraz z rodzicami, przeprowadziliśmy się do Mielca,
                        znajdującego się na Podkarpaciu (rodzinnego miasta moich rodziców).
                    </p>
                </div>
                <section className='map'>
                    <Map/>
                </section>
                <div className='study'>
                        <div className='hatPic'></div>
                        <h1>HISTORIA SZKOŁY</h1>
                        <p>GRERETRDGDERTFfgrgfdgfddgdgrtgdfdgfdggddfGDRGTSEFEGF</p>
                </div>
                <div className='abilities'>
                    <div className='brainPic'></div>
                    <h1>UMIEJĘTNOŚCI</h1>
                    <p>ednak po narodzinach - wraz z rodzicami, przeprowadziliśmy się do Mielca,
                        znajdującego się na Podkarpaciu (rodzinnego miasta
                    </p>
                </div>

            </div>
            )

        }
    }

    class Slider extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                position: 1,
                interval: null
            };
        }

        componentDidMount() {
                this.interval = setInterval(() => {
                this.setState({
                    position: this.state.position === 1 ? 0 : this.state.position + 1});
            }, 2000)
        };

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            const images = [
                './images/screen1.png',
                './images/Baby_Girl-512.png',
            ];

            return ( <div className='pictures'>
                    <img src={images[this.state.position]}/>
                </div>

            );
        }
    }

    class Projects extends React.Component {
        render() {
            return <div>
            <h1>Projekty</h1>
                <Slider/>
            </div>
        }
    }

    class Contact extends React.Component {
        render() {
            return <h1>kontakt!</h1>
        }
    }

//sekcja pierwsza
    class SectionFirst extends React.Component {
        render() {
            return <section>

            </section>
        }
    }

    class SectionSecond extends React.Component {
        render() {
            return <section>

            </section>
        }
    }


    class Template extends React.Component {
        render() {
            return <header>
                <ul className='menu'>
                    <li><IndexLink to='/'>Strona główna</IndexLink></li>
                    <li><IndexLink to='/aboutme'>Poznaj moją historię!</IndexLink></li>
                    <li><IndexLink to='/projects'>Projekty</IndexLink></li>
                    <li><IndexLink to='/contact'>Kontakt</IndexLink></li>
                </ul>
                {this.props.children}
            </header>
        }
    }


    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home}/>
                        <Route path='/aboutme' component={AboutMe}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/contact' component={Contact}/>
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});