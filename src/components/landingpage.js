import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component {
	render(){
		return(
			<div style = {{width: '100%', margin: 'auto'}}>
				<Grid className='landing-grid'>
					<Cell col={12}>
						<img 
							src = "https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png"
							alt = 'avatar'
							className = 'avatar-img'
						/>

						<div className = "banner-txt">
							<h1>Full Stack Web Developer</h1> 

							<hr/>

							<p> HTML/CSS | React | Javascript | PhP | NodeJS | MongoDB </p>
							<div className = "social-links">

								{/* LinkedIn */}
								<a href="https://www.linkedin.com/in/stefanobarbier/" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-linkedin-square" aria-hidden = "true" />
								</a>

								{/* GitHub */}
								<a href="https://github.com/StefanoBarbier" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-github-square" aria-hidden = "true" />
								</a>

								{/* Instagram */}
								<a href="https://www.instagram.com/swiftmozart/" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-instagram" aria-hidden = "true" />
								</a>

								{/* Youtube */}
								<a href="https://www.youtube.com/channel/UCNrLxVt3ajBbd7zbAZuIuuA?view_as=subscriber" target= "_blank" rel = "noopener noreferrer" >
									<i className="fa fa-youtube-square" aria-hidden = "true" />
								</a>

							</div>
						</div>
					</Cell>
				</Grid>

			</div>
			)

	}
}

export default Landing;