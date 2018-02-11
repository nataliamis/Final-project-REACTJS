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

    class Loaders extends React.Component {
        render () {
            let divs = [];
            for(let i = 0; i < 3; i++) {
                divs.push(<div key = {`${i}`}/>);
            }
            return <div className = 'loader'>
                { divs }
            </div>
        }
    }

    class Home extends React.Component {
        state = {
            loading: true
        };
        componentDidMount () {
            this.timeout = setTimeout(() => {
                this.setState ({
                    loading: false
                });
            }, 2700);
        }

        componentWillUnmount () {
            clearTimeout(this.timeout)
        }

        render() {
            if(this.state.loading === true) {
                return <Loaders/>
            }
            return (<div className='homeStyle'>
                <h1 className='home'>Witaj na mojej stronie!</h1>
                <div className='picture'></div>
            </div>

            )
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
    class Abilities extends React.Component {
        render () {
            let spans = [];
            for(let i = 0; i < 5; i++) {
                spans.push(<span className = {`${this.props.ab}${i}`}
                                 key = {`${this.props.ab}${i}`}/>);
            }
            return <div>
            { spans }
            </div>
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
                        <p>Niestety nie mam wykształcenia typowo informatycznego, jestem w trakcie<br></br>
                            studiów na kierunku kosmetologia - jednak podjęłam decyzję o zmianie branży!<br></br>
                            Zawsze interesowało mnie projektowanie stron internetowych, dlatego zdecydowałam<br></br>
                            o wybraniu się na BootCamp w szkole programowania CodersLab. Obecnie ukończyłam 2-miesięczny<br></br>
                            kurs Front-End Developer i poszukuję pracy jako Junior w tej dziedzinie :)</p>
                    </div>
                    <div className='abilities'>
                        <div className='brainPic'></div>
                        <h1>UMIEJĘTNOŚCI</h1>
                        <div className='js'>
                            JAVASCRIPT
                            <Abilities ab = 'js' />
                        </div>
                        <div className='reactjs'>
                            REACT JS
                            <Abilities  ab = 're' />
                        </div>
                        <div className='htmlcss'>
                            HTML/CSS
                            <Abilities ab = 'htm'  />
                        </div>
                        <div className='jquery'>
                            JQUERY
                            <Abilities ab = 'jq'  />
                        </div>
                        <div className='ajax'>
                            AJAX
                            <Abilities ab = 'aj'  />
                        </div>
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
              interval: null,
            };
        }

        componentDidMount() {
            this.interval = setInterval(() => {
                this.setState({
                    position: this.state.position === 2 ? 0 : this.state.position + 1});
            }, 2000)
        };

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            const images = [
                {img: './images/screen1.png',
                 url: 'https://nataliamis.github.io/course-HTML-CSS/'},
                {img: './images/screen2.png',
                 url: 'https://nataliamis.github.io/Binary-Decimal-Calculator/'},
                {img: './images/screen3.png',
                 url: 'https://nataliamis.github.io/To-do-list/'}
            ];

            return ( <div className='pictures'>
                <a href = {images[this.state.position].url}><img src={images[this.state.position].img}/></a>
            </div>
            )
        }
    }

    class Projects extends React.Component {
        render() {
            return <div className='project'>
                <h1>Projekty</h1>
                <Slider/>
            </div>
        }
    }

    class Contact extends React.Component {
        render() {
            const url1 = ['https://www.facebook.com/natalia.misiewicz'];
            const url2 = ['https://www.linkedin.com/in/natalia-misiewicz-a05429158/'];
            const url3 = ['https://www.instagram.pl/natalieeee_m'];


            return <div className='contact'>
                <h1>Kontakt</h1>
                <h2>Dane kontaktowe</h2>
                <div>Telefon: 535 875 464 <br></br>
                    E-mail: nataliamisiewicz1@gmail.com
                </div>
                <div className = 'media'>
                    <a href = {url1}><div className='fb'></div></a>
                    <a href = {url2}><div className='linkedin'></div></a>
                    <a href = {url3}><div className='instagram'></div></a>
                </div>
            </div>

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

    class NotFound extends React.Component {
        render () {
            return <div className= 'notfound'>
            <h1>Niestety nie ma takiej strony! :(<br></br>
                Wróć do <Link to = "/">strony głównej</Link> :)</h1>
            </div>
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
                        <Route path='*' component={NotFound}/>
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
